import classes from "./page.module.css"
import IdentityCard from "@/components/identity-card/identity-card.component"

const port1 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1704282140/Photography%20Website/About/port1_lez9pi_1_fch505.jpg"
const port2 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1704282141/Photography%20Website/About/port3_tlafvf_1_pql5ot.jpg"

const socialHandles1 = {
    fb : "https://www.facebook.com/people/Anish-Dutta/100017535307656/",
    insta : "https://www.instagram.com/anish_dutta_photography/"
}

const socialHandles2 = {
    fb : "https://www.facebook.com/people/Shuvrajyoti-Das/pfbid02FV1sv22tb4oYt73M7wD8aqabBfkT8VuwXPeihFaD4QmuYgJR8e4GwKKxzTA4ZVw2l/",
    insta : "https://www.instagram.com/shuvrajyoti_das/"
}

const About = () => {
    return(
        <div>
            <div className={classes.id_container}>
                <IdentityCard imageURL={port1} authName="Anish Dutta" socialHandles={socialHandles1} />
                <IdentityCard imageURL={port2} authName="Shuvrajyoti Das" socialHandles={socialHandles2}/>
            </div>
        </div>
    )
}

export default About