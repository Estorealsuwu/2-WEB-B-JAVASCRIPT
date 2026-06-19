import {
  useMemo,
  useState,
} from "react";

import { AuthContext } from "./authContextCore";
import {
  clearSession,
  getSession,
  loginUser,
  registerUser,
  saveSession,
} from "../lib/authStorage";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getSession());

  const login = async (credentials) => {
    const loggedUser = await loginUser(credentials);
    saveSession(loggedUser);
    setUser(loggedUser);

    return loggedUser;
  };

  const register = async (newUser) => {
    const createdUser = await registerUser(newUser);
    saveSession(createdUser);
    setUser(createdUser);

    return createdUser;
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(user),
      login,
      logout,
      register,
      user,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
