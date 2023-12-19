import locationLogo from "../../assets/logos/location.png"
import phoneLogo from "../../assets/logos/telephone.png"
import mailLogo from "../../assets/logos/gmail.png"
import facebookLogo from "../../assets/logos/facebook.png"
import instagramLogo from "../../assets/logos/instagram.png"
import youtubeLogo from "../../assets/logos/youtube.png"
import classes from "./footer.module.css"

const Footer = () => {
    const d = new Date(Date.now())
    return(
        <div className={classes.footer_wrapper}>
            <div className={classes.footer}>
                
                <div className={classes.footer_info}>
                    <h3>About D&D Productions</h3>
                    <p>
                        Follow Us
                    </p>
                    <div className={classes.footer_icons}>
                        <a href="https://www.facebook.com/profile.php?id=100084598611956" target="_blank">
                            <img src={facebookLogo.src} alt="" srcset="" height="30px" width="30px"/>
                        </a>
                        <a href="https://www.instagram.com/dandd.productions/" target="_blank">
                            <img src={instagramLogo.src} alt="" srcset="" height="30px" width="30px"/>
                        </a>
                        <a href="https://www.youtube.com/@ddproductions664" target="_blank">
                            <img src={youtubeLogo.src} alt="" srcset="" height="30px" width="30px"/>
                        </a>
                    </div>
                </div>
                <div className={classes.footer_contact}>
                    <div className={classes.footer_contact_items}>
                            <img src={locationLogo.src} alt="" srcset="" height="30px" width="30px"/>
                            <p>Raikatpara , Jalpaiguri</p>
                            
                    </div>
                    <div className={classes.footer_contact_items}>
                            <img src={phoneLogo.src} alt="" srcset="" height="30px" width="30px"/>
                            <p>+917865003343 / +919614455661</p>
                            
                    </div>
                    <div className={classes.footer_contact_items}>
                            <img src={mailLogo.src} alt="" srcset="" height="30px" width="30px"/>
                            <p>dasandduttaproductions@gmail.com</p>
                            
                    </div>
                </div>
            </div>
            <div className={classes.copyright_text}>
                <p>&copy; {d.getFullYear()} D&D Productions All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer