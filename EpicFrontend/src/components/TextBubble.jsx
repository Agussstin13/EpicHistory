import "../assets/css/MainCastle.css";
export default function TextBubble(props) {
  return (
    <div className="chat-container" onClick={props.redirect} style={{left: props.positionX, bottom: props.positionY}}>
      <div className="chat-bubble" >{props.text}</div>
    </div>
  );
}
