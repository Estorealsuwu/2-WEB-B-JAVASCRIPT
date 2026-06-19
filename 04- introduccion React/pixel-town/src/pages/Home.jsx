import { useState, useEffect } from "react";

import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];

    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      stars: 0,
    };

    setMessages([newMessage, ...messages]);
  };

  const starMessage = (id) => {
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
    <div className="container">
        
      <h1>🏘️ PixelTown</h1>

      <MessageForm onAddMessage={addMessage} />

      {messages.length === 0 ? (
        <p>No hay mensajes todavía.</p>
      ) : (
        <MessageList
          messages={messages}
          onStar={starMessage}
        />
      )}
    </div>
  );
};

export default Home;