'use client'

import { categoryCardInfoMob } from "@/assets/imageLinks"
import classes from "./category-card-mob.module.css"
import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const imageStyle = {
    height: '100%',
    width : '100%',
    borderRadius : '5px'
}


const CategoryCardMob = () => {
    return(
        <div className={classes.category_card_mob_wrapper}>

            {/* Tab View */}
            {
                categoryCardInfoMob.map((el, index) => {
                    if(index % 2 == 0){
                        return(
                            
                            <Fade key={index} duration={1200} className={classes.tab_view}>
                                <div className={`${classes.category_card_mob}`}>
                                    <Link href={el.routeLink} className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                            <Image 
                                                className={classes.cat_card_mob_img} 
                                                src={el.logo} 
                                                alt=""
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={imageStyle}
                                                priority
                                                quality={100}
                                            />
                                    </Link>
                                    
                                    <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_portfolio}`}>
                                        <Image 
                                            className={classes.cat_card_mob_img} 
                                            src={el.imgLink}
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </Fade>
                    )
                    }
                    else{
                        return(
                            <Fade key={index} duration={1200} className={classes.tab_view}>
                                <div className={`${classes.category_card_mob}`}>
                                    <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_portfolio}`}>
                                        <Image 
                                            className={classes.cat_card_mob_img} 
                                            src={el.imgLink}
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                        />
                                    </div>
                                    <Link href={el.routeLink} className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                        <Image 
                                            className={classes.cat_card_mob_img} 
                                            src={el.logo} 
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                        />
                                    </Link>
                                </div>
                            </Fade>
                    )
                    }
                })
            }

            {/* Mobile View */}
                {categoryCardInfoMob.map((el, index) => {
                        return(
                            <Fade key={index} duration={1200} className={classes.mob_view} >
                                <div className={`${classes.category_card_mob}`}>
                                    <Link href={el.routeLink} className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                        <Image 
                                            className={classes.cat_card_mob_img} 
                                            src={el.logo} 
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                        />
                                    </Link>
                                    <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_portfolio}`}>
                                        <Image 
                                            className={classes.cat_card_mob_img} 
                                            src={el.imgLink}
                                            alt=""
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={imageStyle}
                                            priority
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </Fade>
                    )
                })
            }
        </div>
    )
}

export default CategoryCardMob