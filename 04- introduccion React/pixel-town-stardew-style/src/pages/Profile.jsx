import { useAuth } from "../context/useAuth";
import houseImage from "../assets/house-tier-1.png";

const Profile = () => {
  const { user } = useAuth();
  const messages =
    JSON.parse(localStorage.getItem("messages")) || [];
  const ownMessages = messages.filter(
    (message) => message.authorId === user.id
  );
  const totalStars = ownMessages.reduce(
    (acc, msg) => acc + msg.stars,
    0
  );
  const createdAt = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
  }).format(new Date(user.createdAt));

  return (
    <main className="container">
      <section className="profile-card">
        <p className="eyebrow">Ruta protegida</p>
        <img
          className="profile-house"
          src={houseImage}
          alt="Casa pixel art del perfil"
        />
        <h1>Casa de @{user.username}</h1>

        <div className="profile-summary">
          <p>
            <strong>Correo:</strong> {user.email}
          </p>
          <p>
            <strong>Cuenta creada:</strong> {createdAt}
          </p>
        </div>

        <div className="stats-grid">
          <article>
            <span>{ownMessages.length}</span>
            <p>Mensajes publicados</p>
          </article>

          <article>
            <span>{totalStars}</span>
            <p>Estrellas recibidas</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Profile;
