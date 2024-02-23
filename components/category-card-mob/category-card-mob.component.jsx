'use client'

import classes from "./category-card-mob.module.css"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

const imageStyle = {
    height: '100%',
    width : '100%',
    borderRadius : '5px'
}

const indexes = [0, 1, 2, 3]

const CategoryCardMob = () => {
    return(
        <div className={classes.category_card_mob_wrapper}>
            {indexes.map((el, index) => {
                if(index % 2 == 0){
                    return(
                        <>
                        <Fade duration={2000}>
                            <div duration={2000} className={`${classes.category_card_mob} ${classes.tab_view}}`}>
                                <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                    <Image 
                                        className={classes.cat_card_mob_img} 
                                        src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708683686/Photography%20Website/test/bibahooscapes_rxamie.png" 
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
                                        src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708685333/Photography%20Website/test/test3_olrc2q_1_kyhwy0_m4dog6.jpg" 
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
                        
                        </>
                    )
                }
                else{
                    return(
                        <>
                        <Fade duration={1200}>
                        <div className={`${classes.category_card_mob} ${classes.tab_view}`}>
                            
                            <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_portfolio}`}>
                                <Image 
                                    className={classes.cat_card_mob_img} 
                                    src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708685333/Photography%20Website/test/test3_olrc2q_1_kyhwy0_m4dog6.jpg" 
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={imageStyle}
                                    priority
                                    quality={100}
                                />
                            </div>
                            <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                <Image 
                                    className={classes.cat_card_mob_img} 
                                    src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708683686/Photography%20Website/test/bibahooscapes_rxamie.png" 
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
                        
                        </>
                    )
                }
            })}

            {indexes.map((el, index) => {
                    return(
                        <>
                        <Fade duration={1200}><div className={`${classes.category_card_mob} ${classes.mob_view}`}>
                            <div className={`${classes.cat_card_mob_img_wrapper} ${classes.cat_card_mob_banner}`}>
                                <Image 
                                    className={classes.cat_card_mob_img} 
                                    src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708683686/Photography%20Website/test/bibahooscapes_rxamie.png" 
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
                                    src="https://res.cloudinary.com/dst1eqcmo/image/upload/v1708685333/Photography%20Website/test/test3_olrc2q_1_kyhwy0_m4dog6.jpg" 
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={imageStyle}
                                    priority
                                    quality={100}
                                />
                            </div>
                        </div></Fade>
                        
                        </>
                    )
            })}
        </div>
    )
}

export default CategoryCardMob