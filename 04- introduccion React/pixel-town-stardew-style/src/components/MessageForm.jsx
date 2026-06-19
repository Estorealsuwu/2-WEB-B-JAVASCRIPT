import { useState } from "react";

const MessageForm = ({ onAddMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onAddMessage(text);

    setText("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <label htmlFor="town-message">
        Nuevo aviso
      </label>

      <input
        id="town-message"
        type="text"
        placeholder="Escribe algo para la ciudad..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Publicar
      </button>
    </form>
  );
};

export default MessageForm;
