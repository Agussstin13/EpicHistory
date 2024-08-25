import { useState } from 'react';
import '../assets/css/GenericAbilityCard.css'
import ManaIcon from '../assets/images/ManaIcon.png'

export default function GenericAbilityCard({clas, title, text, image, cd, mana}){
    const [cdon, onoff] = useState(false);
    const [cooldown, setcd] = useState(cd);
    const disable = () =>{
        if (cooldown >= 2 && cdon===true){
            setcd(cooldown-1);
        }else{
            if(cd!=0){
                setcd(cd);
                document.getElementById(`${title}card`).classList.toggle("disabled");
                cdon === false ? document.getElementById(`${title}cd`).style.display = 'table' : document.getElementById(`${title}cd`).style.display = 'none';
                onoff(!cdon);
            }
        }
    }
    return(
        <span id={`${title}card`} onClick={disable} className={`${clas}span Genericcard`}>
            <span><p className={`Generictitle ${clas}title ${clas}textcolor`}>{title}</p></span>
            <img className={`AbilityImage ${clas}imageborder`} src={image}></img>
            <span>
                <p className={`Generictext ${clas}textcolor`}>{text}</p>
            </span>
            <span className='span'>
                <span className='span2'>
                    <p className='mana'>{mana}</p>
                    <img  height='10rem' width='7rem' src={ManaIcon}/>
                </span>
                <p id={`${title}cd`} className="cdoff">turns left: {cooldown}</p>
            </span>
        </span>
    );
}