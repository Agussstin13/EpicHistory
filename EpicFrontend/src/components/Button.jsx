export default function Button(props){
    return(
        <button style={props.styles} className={props.className} onClick={props.event}>{props.content}</button>
    );
}