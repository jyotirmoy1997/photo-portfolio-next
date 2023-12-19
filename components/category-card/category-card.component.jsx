import { categoryCardImages } from "@/assets/imageLinks"
import classes from "./category-card.module.css"
import Image from "next/image"


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
                            />
                            <div className={classes.overlay}>
                                <div className={classes.det_gradient}>
                                    <h1>BibahoScapes</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard