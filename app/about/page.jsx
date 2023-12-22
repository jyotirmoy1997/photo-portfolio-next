import classes from "./page.module.css"
import IdentityCard from "@/components/identity-card/identity-card.component"

const port1 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672149374/Photography%20Website/About/port1_lez9pi.jpg"
const port2 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672149375/Photography%20Website/About/port3_tlafvf.jpg"


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