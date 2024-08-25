export default function Input(props){
    function changeData(e){
        e.preventDefault();
        props.setData(e.target.value);
    }

    return(
        <input style={props.style} type={props.type} onChange={e => changeData(e)} className={props.class} placeholder={props.placeholder}/>
    );
}