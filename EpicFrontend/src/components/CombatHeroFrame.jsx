import '../assets/css/CombatHeroFrame.css'
import HeroFrame from '../assets/images/HeroFrame.svg'

export function CombatHeroFrame(props){
  //ejemplo de como debemos enviarle la prop componente: heroImage={{backgroundImage: `url(${HeroImage})`}}
  return(
    <div className='container'>
      <img style={props.heroImage} src={HeroFrame} className="hero-frame" alt='Frame'/>
    </div>
  );
}