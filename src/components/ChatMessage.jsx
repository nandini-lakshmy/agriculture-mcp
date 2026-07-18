import "./ChatMessage.css";

export default function ChatMessage({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
}