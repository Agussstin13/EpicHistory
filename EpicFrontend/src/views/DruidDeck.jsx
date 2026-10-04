import GenericAbilityCard from "../components/GenericAbilityCard"
import GigantRoot from '../assets/images/Gigant Root.jpg'
import DruidicHealing from '../assets/images/DruidicHealing.jpg'
import WoodenArmour from '../assets/images/Wooden Armour.jpg'

export default function DruidDeck() {
    return (
        <>
            <GenericAbilityCard
                clas="Druid"
                title="Nature Sword"
                text={"Una mescla de lianas y raices salen del suelo para apuñalar a su objetivo, infligiendo un daño de 10"}
                image={GigantRoot}
                cd={2}
                mana={5}
            />
            <GenericAbilityCard
                clas="Druid"
                title="Druidic Healing"
                text={"Sana a un ser vivo hasta 10 puntos de salud por turno, consumiendo el doble de mana"}
                image={DruidicHealing}
                cd={0}
                mana={20}
            />
            <GenericAbilityCard
                clas="Druid"
                title="Wooden Armour"
                text={"d"}
                image={WoodenArmour}
                cd={2}
                mana={4}
            />
        </>
    )
}