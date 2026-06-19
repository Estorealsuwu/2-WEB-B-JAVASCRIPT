const Profile = () => {
  const messages =
    JSON.parse(localStorage.getItem("messages")) || [];

  const totalStars = messages.reduce(
    (acc, msg) => acc + msg.stars,
    0
  );

  return (
    <div className="container">
      <h1>🏠 Casa del Aventurero</h1>

      <p>Mensajes publicados: {messages.length}</p>

      <p>Estrellas recibidas: {totalStars}</p>

      <p>Nivel: {Math.floor(totalStars / 5) + 1}</p>
    </div>
  );
};

export default Profile;