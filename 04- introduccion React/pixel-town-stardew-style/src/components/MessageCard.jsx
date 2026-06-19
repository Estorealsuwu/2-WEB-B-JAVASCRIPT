const MessageCard = ({ canStar, message, onStar }) => {
  return (
    <article className="pixel-card">
      <div className="message-meta">
        @{message.authorName || "visitante"}
      </div>

      <p>{message.text}</p>

      <button
        disabled={!canStar}
        onClick={() => onStar(message.id)}
        title={!canStar ? "Inicia sesion para dar estrellas" : undefined}
      >
        Estrella {message.stars}
      </button>
    </article>
  );
};

export default MessageCard;
