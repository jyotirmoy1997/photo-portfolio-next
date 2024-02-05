import classes from "./page.module.css"
import IdentityCard from "@/components/identity-card/identity-card.component"
import { aboutInfo } from "@/assets/imageLinks"


const About = () => {
    return(
        <div>
            <div className={classes.id_container}>
                {
                    aboutInfo.map((el, index) => 
                    <IdentityCard 
                        key={index} 
                        imageURL={el.portfolioImage}
                        authName={el.authName}
                        socialHandles={el.socialHandles}
                        about={el.about}
                    />)
                }
            </div>
        </div>
    )
}

export default About