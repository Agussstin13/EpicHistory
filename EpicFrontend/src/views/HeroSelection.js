import Frame from '../components/Frame.js'
import Wizard from '../assets/images/Wizard.jpg'
import Warrior from '../assets/images/Warrior.jpg'
import Druid from '../assets/images/Druid.jpg'
import Monk from '../assets/images/Monk.jpg'
import Archer from '../assets/images/Archer.jpg'
import WizardVoice from '../assets/audio/MageVoice.mp3'
import DruidVoice from '../assets/audio/DruidVoice.mp3'
import ArcherVoice from '../assets/audio/ArcherVoice.mp3'
import EpicSong from '../assets/audio/EpicMusic.mp3'
import '../assets/css/Background.css';
import { useState } from 'react'

function HeroSelection () {
    const [selection, setselection] = useState(0);

    return (
        <>
            <audio id="EpicSong" src={EpicSong} />
            <Frame
                title="Mage"
                image={Wizard}
                alt="Mage"
                sound={WizardVoice}
                text="This powerful sorcerer uses the magic both to attack and defend himself."
                onClick={() => setselection(0)}
            />
            <Frame
                title="Warrior"
                image={Warrior}
                alt="Warrior"
                sound={DruidVoice}
                text="A disciplined and trained fighter, who with determination, can against everything."

            />
            <Frame
                title="Druid"
                image={Druid}
                alt="Druid"
                sound={DruidVoice}
                text="Druids are born in the hearth of the woods. They have complete understanding of the life cycle."
            />
            <Frame
                title="Monk"
                image={Monk}
                alt="Monk"
                sound={DruidVoice}
                text="Meditate and train everyday without rest, made this fighter a formidable opponent."
            />
            <Frame
                title="Archer"
                image={Archer}
                alt="Archer"
                sound={ArcherVoice}
                text="This letal archer has survive in the woods for a long time and know perfectly how to survive."
            />
        </>
    )
}
export default HeroSelection;