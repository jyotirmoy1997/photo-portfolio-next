import locationLogo from "../../assets/logos/location.png"
import phoneLogo from "../../assets/logos/telephone.png"
import mailLogo from "../../assets/logos/gmail.png"
import facebookLogo from "../../assets/logos/facebook.png"
import instagramLogo from "../../assets/logos/instagram.png"
import youtubeLogo from "../../assets/logos/youtube.png"
import classes from "./footer.module.css"
import Image from "next/image"

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
                            <Image src={facebookLogo.src} alt="fb-logo" height={30} width={30}/>
                        </a>
                        <a href="https://www.instagram.com/dandd.productions/" target="_blank">
                            <Image src={instagramLogo.src} alt="insta-logo" height={30} width={30}/>
                        </a>
                        <a href="https://www.youtube.com/@ddproductions664" target="_blank">
                            <Image src={youtubeLogo.src} alt="yt-logo" height={30} width={30}/>
                        </a>
                    </div>
                </div>
                <div className={classes.footer_contact}>
                    <div className={classes.footer_contact_items}>
                        <Image src={locationLogo.src} alt="loc-logo" height={30} width={30}/>
                        <p>Raikatpara , Jalpaiguri</p>
                    </div>
                    <div className={classes.footer_contact_items}>
                        <Image src={phoneLogo.src} alt="ph-logo" height={30} width={30}/>
                        <p>+917865003343 / +919614455661</p>
                    </div>
                    <div className={classes.footer_contact_items}>
                        <Image src={mailLogo.src} alt="mail-logo" height={30} width={30}/>
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