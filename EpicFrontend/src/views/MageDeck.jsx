import GenericAbilityCard from "../components/GenericAbilityCard"
import FireProjectile from "../assets/images/Fire Projectile.jpg"
import MagicArmour from "../assets/images/Magic Armour.jpg"
import FrozenLegs from "../assets/images/FrozenLegs.jpg"


export default function () {
    return (
        <>
            <GenericAbilityCard
                clas="Mage"
                title="Fire Projectile"
                text={"Un proyectil que inflige daño de 2*(inteligencia) + 1*(inteligencia) por 1 turno. 1te ."}
                image={FireProjectile}
                cd={2}
                mana={7}
            />
            <GenericAbilityCard
                clas="Mage"
                title="Magic Armour" 
                text={"obtienes un escudo por 50 puntos de salud que absorbe cualquier ataque. Consume mana por turno. Si tu cantidad de mana se reduce por debajo del valor actual del escudo, el valor del escudo se reducira al mismo nivel."} 
                image={MagicArmour}
                cd={-1}
                mana={3}
            />
            <GenericAbilityCard
                clas="Mage"
                title="Frozen Feets" 
                text={"Lanzas un hechizo de frio a los pies de tu oponente que se esta moviendo inmovilizandolo y derribandolo. Este pierde su siguiente turno. Cuesta 5 de mana. 2te"} 
                image={FrozenLegs} 
                cd={2}
                mana={5}
            />
        </>
    )
}