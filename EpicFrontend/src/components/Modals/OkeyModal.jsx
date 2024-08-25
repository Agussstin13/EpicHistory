import '../../assets/css/modal.css'
import Button from '../Button';

export function OkeyModal(props){
    console.log(props.text);
    function onClick(){
        props.event();
    }

    return(
        <div className="modalBackground">
            <div className="frame" style={props.style}>
                <div style={{fontSize: `clamp(0.8rem, 2.4vw, 2.4vw)`}}>
                    {props.title}
                </div>
                <div style={{fontSize: `clamp(0.6rem, 1.8vw, 1.8vw)`}}>
                    {props.text}
                </div>
                <div>
                    <Button content={"Let's go"} event={onClick}/>
                </div>
            </div> 
        </div>
    );
}
