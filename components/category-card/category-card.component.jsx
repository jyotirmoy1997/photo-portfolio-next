import { categoryCardImages } from "@/assets/imageLinks"
import classes from "./category-card.module.css"
import Image from "next/image"

const CategoryCard = () => {
    return(
        <div>
            {
                categoryCardImages.map((img) => {
                    return(
                        <div className={classes.category_card}>
                            <Image
                                className={classes.category_card_img}
                                src={img} alt="" 
                                width={2000} 
                                height={1000}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard