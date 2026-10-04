import GenericAbilityCard from "../components/GenericAbilityCard"
import Charge from "../assets/images/Charge.jpg"

export default function () {
    return (
        <>
            <GenericAbilityCard
                clas="Warrior"
                title="Carga"
                text="Arremetes hacia tu objetivo"
                image={Charge}
                cd={3}
                mana={10}
            />
        </>
    )
}