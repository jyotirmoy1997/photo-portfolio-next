import { categoryCardImages } from "@/assets/imageLinks"
import classes from "./category-card.module.css"

const CategoryCard = () => {
    return(
        <div>
            {
                categoryCardImages.map((img) => {
                    return(
                        <div className={classes.category_card}>
                            <img src={img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard