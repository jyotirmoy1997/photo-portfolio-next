'use client'
import { categoryCardImages } from "@/assets/imageLinks"
import classes from "./category-card.module.css"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"


const CategoryCard = () => {
    return(
        <div className={classes.category_card_wrapper}>
            {
                categoryCardImages.map((img, index) => {
                    return(
                        <div key={index} className={classes.category_card}>
                            <Image
                                className={classes.category_card_img}
                                src={img} alt="" 
                                width={2000} 
                                height={1000}
                                quality={100} 
                                priority 
                                sizes="100vw"
                            />
                            <div 
                                className={`${classes.overlay} 
                                ${(index % 2 == 0) ? 
                                classes.alternate_odd : 
                                classes.alternate_even}`}>
                                <Fade duration={1200}>
                                    <div 
                                        className={`${classes.det_gradient} 
                                        ${(index % 2 == 0) ? 
                                        classes.alternate_det_gradient_odd : 
                                        classes.alternate_det_gradient_even}`}>
                                        <h1>BibahoScapes</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Obcaecati quisquam dolor, esse ratione id dolorem ducimus natus fuga eos nostrum, eaque sint. 
                                            Ducimus ea possimus nam temporibus impedit voluptatem qui.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard