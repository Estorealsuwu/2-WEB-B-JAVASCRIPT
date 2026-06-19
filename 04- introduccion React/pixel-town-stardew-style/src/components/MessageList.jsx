import MessageCard from "./MessageCard";

const MessageList = ({ canStar, messages, onStar }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageCard
          canStar={canStar}
          key={message.id}
          message={message}
          onStar={onStar}
        />
      ))}
    </div>
  );
};

export default MessageList;
