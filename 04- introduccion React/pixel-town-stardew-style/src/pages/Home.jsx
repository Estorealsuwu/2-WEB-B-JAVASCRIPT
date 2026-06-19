import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import specialOrderBoard from "../assets/special-order-board.png";
import { useAuth } from "../context/useAuth";

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const [messages, setMessages] = useState(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];

    return savedMessages;
  });

  useEffect(() => {
    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const addMessage = (text) => {
    if (!isAuthenticated) return;

    const newMessage = {
      id: Date.now(),
      authorId: user.id,
      authorName: user.username,
      text,
      stars: 0,
    };

    setMessages([newMessage, ...messages]);
  };

  const starMessage = (id) => {
    if (!isAuthenticated) return;

    setMessages(
      messages.map((message) =>
        message.id === id
          ? {
              ...message,
              stars: message.stars + 1,
            }
          : message
      )
    );
  };

  return (
    <main className="container">
      <section className="hero-panel board">
        <p className="eyebrow">Linea de tiempo</p>
        <h1>Tablon del Pueblo</h1>
        <p className="subtitle">
          Publica avisos para tu pueblo y junta estrellas de otros habitantes.
        </p>
        <img
          className="town-board-image"
          src={specialOrderBoard}
          alt="Tablon pixel art del pueblo"
        />

        {isAuthenticated ? (
          <MessageForm onAddMessage={addMessage} />
        ) : (
          <div className="locked-panel">
            <p>
              Inicia sesion para publicar y reaccionar en el tablon.
            </p>
            <div className="auth-actions">
              <Link to="/login">Entrar</Link>
              <Link to="/register">Crear cuenta</Link>
            </div>
          </div>
        )}
      </section>

      <section className="messages-board" aria-label="Mensajes del pueblo">
        {messages.length === 0 ? (
          <p className="empty-message">
            El tablon esta vacio. Publica el primer mensaje del dia.
          </p>
        ) : (
          <MessageList
            canStar={isAuthenticated}
            messages={messages}
            onStar={starMessage}
          />
        )}
      </section>
    </main>
  );
};

export default Home;
