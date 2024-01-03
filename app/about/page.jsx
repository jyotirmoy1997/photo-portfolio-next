import classes from "./page.module.css"
import IdentityCard from "@/components/identity-card/identity-card.component"

const port1 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1704282140/Photography%20Website/About/port1_lez9pi_1_fch505.jpg"
const port2 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1704282141/Photography%20Website/About/port3_tlafvf_1_pql5ot.jpg"


const About = () => {
    return(
        <div>
            <div className={classes.id_container}>
                <IdentityCard imageURL={port1} authName="Anish Dutta" />
                <IdentityCard imageURL={port2} authName="Shuvrajyoti Das"/>
            </div>
        </div>
    )
}

export default About