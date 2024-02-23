'use client'

import classes from "./category-card-mob.module.css"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

const imageStyle = {
    height: '100%',
    width : '100%',
    borderRadius : '5px'
}

const imgArray = [
    {
        logo : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708704365/Photography%20Website/test/TAG_epxay2.png",
        imgLink : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708685333/Photography%20Website/test/test3_olrc2q_1_kyhwy0_m4dog6.jpg"
    },
    {
        logo : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708705714/Photography%20Website/test/PIXEL_TAG_ciw5lu.png",
        imgLink : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708704810/Photography%20Website/test/test5_b910uc_1_z79laf_sblcbb.jpg"
    },
    {
        logo : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708705715/Photography%20Website/test/BrandStand_TAG_euyb1o.png",
        imgLink : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708704803/Photography%20Website/test/test_zdv7kx_bctq9t.jpg"
    },
    {
        logo : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708705713/Photography%20Website/test/MEDIA_PEDIA_TAG_gkkhqu.png",
        imgLink : "https://res.cloudinary.com/dst1eqcmo/image/upload/v1708704753/Photography%20Website/test/test6_szp22j_1_nury0o_dmg9c1.jpg"
    }
]

const CategoryCardMob = () => {
    return(
        <div className={classes.category_card_mob_wrapper}>
            {imgArray.map((el, index) => {
                    return(
                        <Fade key={index} duration={1200}>
                            <div className={`${classes.category_card_mob} ${classes.mob_view}`}>
                                <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
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
                                </div>
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
            })}
        </div>
    )
}

export default CategoryCardMob