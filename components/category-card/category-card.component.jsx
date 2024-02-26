'use client'
import { categoryCardInfo} from "@/assets/imageLinks"
import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import classes from "./category-card.module.css"


const imageStyle = {
    height: '100%',
    width : '100%'
}


const CategoryCard = () => {
    return(
        <div className={classes.category_card_wrapper}>
            {
                categoryCardInfo.map((card, index) => {
                    return(
                        <div key={index} className={classes.category_card}>
                            <Image
                                className={classes.category_card_img}
                                src={card.imgLink} alt="" 
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
                                
                                <Fade duration={1700} className={classes.fade}>
                                    <div 
                                        className={`${classes.det_gradient} 
                                        ${(index % 2 == 0) ? 
                                        classes.alternate_det_gradient_odd : 
                                        classes.alternate_det_gradient_even}`}>
                                        
                                    

                                        <div className={classes.category_logo_container}>
                                            <Link href={card.routLink}>
                                                <Image 
                                                    src={card.logoLink} alt="category-logo"
                                                    style={imageStyle} 
                                                    width={0}
                                                    height={0} 
                                                    sizes="100vw" 
                                                    priority
                                                    quality={100} 
                                                />
                                            </Link>
                                            
                                        </div>
                                        <p>{card.description}</p>
                                        {
                                            card.services.map((service, index) => <h3 className={classes.services_map} key={index}>{service}</h3>)
                                        }
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