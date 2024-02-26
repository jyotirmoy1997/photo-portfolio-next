import Image from "next/image"
import locationLogo from "@/public/logos/location.png"
import phoneLogo from "@/public/logos/telephone.png"
import mailLogo from "@/public/logos/gmail.png"
import facebookLogo from "@/public/logos/facebook.png"
import instagramLogo from "@/public/logos/instagram.png"
import youtubeLogo from "@/public/logos/youtube.png"
import classes from "./footer.module.css"


const Footer = () => {
    const d = new Date(Date.now())
    return(
        <div className={classes.footer_wrapper}>
            <div className={classes.footer}>
                
                <div className={classes.footer_info}>
                    <h2>About D&D Productions</h2>
                    <p>Crafting timeless love stories through Wedding Photography, showcasing individuality with Portfolio Photography, narrating brand tales with captivating visuals, and bringing moments to life through the art of Videography.</p>
                    <div className={classes.footer_icons_wrapper}>
                        <div className={classes.footer_follow}>
                            <h4>
                                Follow Us
                            </h4>
                        </div>
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
                </div>
                <div className={classes.footer_contact_wrapper}>
                    <div className={classes.footer_contact}>
                        <h2>Contact Us</h2>
                        <div className={classes.footer_contact_items}>
                            {/* <a href="tel:+917865003343"> */}
                                <Image src={phoneLogo.src} alt="ph-logo" height={30} width={30}/>
                            {/* </a> */}
                            <p>+917865003343 / +919614455661</p>
                        </div>
                        <div className={classes.footer_contact_items}>
                            <a href="mailto:dasandduttaproductions@gmail.com">
                                <Image src={mailLogo.src} alt="mail-logo" height={30} width={30}/>
                            </a>
                            <p>dasandduttaproductions@gmail.com</p>
                        </div>
                        <div className={classes.footer_contact_items}>
                            <Image src={locationLogo.src} alt="loc-logo" height={30} width={30}/>
                            <p>Raikatpara, Jalpaiguri</p>
                        </div>
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