const USERS_KEY = "pixel-town-users";
const SESSION_KEY = "pixel-town-session";

const readJson = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const normalize = (value) => value.trim().toLowerCase();

const createSalt = () => {
  if (crypto.randomUUID) return crypto.randomUUID();

  const values = crypto.getRandomValues(new Uint32Array(4));
  return Array.from(values).join("-");
};

export const hashPassword = async (password, salt) => {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export const getUsers = () => readJson(USERS_KEY, []);

export const saveUsers = (users) => {
  writeJson(USERS_KEY, users);
};

export const getSession = () => readJson(SESSION_KEY, null);

export const saveSession = (user) => {
  writeJson(SESSION_KEY, user);
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const toPublicUser = (user) => ({
  id: user.id,
  username: user.username,
  email: user.email,
  createdAt: user.createdAt,
});

export const registerUser = async ({ username, email, password }) => {
  const users = getUsers();
  const normalizedUsername = normalize(username);
  const normalizedEmail = normalize(email);
  const exists = users.some(
    (user) =>
      normalize(user.username) === normalizedUsername ||
      normalize(user.email) === normalizedEmail
  );

  if (exists) {
    throw new Error("Ese usuario o correo ya esta registrado.");
  }

  const salt = createSalt();
  const user = {
    id: createSalt(),
    username: username.trim(),
    email: email.trim(),
    salt,
    passwordHash: await hashPassword(password, salt),
    createdAt: new Date().toISOString(),
  };

  saveUsers([...users, user]);

  return toPublicUser(user);
};

export const loginUser = async ({ identifier, password }) => {
  const normalizedIdentifier = normalize(identifier);
  const user = getUsers().find(
    (storedUser) =>
      normalize(storedUser.username) === normalizedIdentifier ||
      normalize(storedUser.email) === normalizedIdentifier
  );

  if (!user) {
    throw new Error("No encontramos una cuenta con esos datos.");
  }

  const passwordHash = await hashPassword(password, user.salt);

  if (passwordHash !== user.passwordHash) {
    throw new Error("La contrasena no coincide.");
  }

  return toPublicUser(user);
};
