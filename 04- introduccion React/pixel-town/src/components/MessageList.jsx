import MessageCard from "./MessageCard";

const MessageList = ({ messages, onStar }) => {
  return (
    <>
      {messages.map((message) => (
        <MessageCard
          key={message.id}
          message={message}
          onStar={onStar}
        />
      ))}
    </>
  );
};

export default MessageList;