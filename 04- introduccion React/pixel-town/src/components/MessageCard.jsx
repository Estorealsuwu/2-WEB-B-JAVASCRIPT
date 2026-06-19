const MessageCard = ({ message, onStar }) => {
  return (
    <div className="pixel-card">
      <p>{message.text}</p>

      <button onClick={() => onStar(message.id)}>
        ⭐ {message.stars}
      </button>
    </div>
  );
};

export default MessageCard;