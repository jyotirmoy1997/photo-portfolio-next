'use client'

import classes from "./carousel.module.css"
import { useState, useEffect } from "react"
import { carouselImages } from "@/assets/imageLinks"
import Image from "next/image"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io";
import { GoHorizontalRule } from "react-icons/go";



const CarouselComponent = () => {
    const [imageIndex, setImageImdex]= useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageImdex(index => {
                if(index === carouselImages.length - 1)
                    return 0

                    return index+1;
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [])
    
    const showPrevImage = () => {
        setImageImdex(index => {
            if(index === 0)
                return carouselImages.length - 1
        
            return index-1;
        })
    }
    const showNextImage = () => {
        setImageImdex(index => {
            if(index === carouselImages.length - 1)
                return 0
        
            return index+1;
        })
    }
    return(
        <div className={classes.carousel_wrapper}>
            <div className={classes.carousel_container}>
                {
                    carouselImages.map((imgURL, index) => 
                    <Image 
                        key={index} 
                        className={classes.carousel_image} 
                        src={imgURL} width={5568} 
                        height={2784} alt="" 
                        priority style={{translate : `${-100 * imageIndex}%`}} 
                    />)
                }
            </div>
            <button className={classes.image_slider_btn} style={{left : 0}} onClick={showPrevImage}>
                <IoIosArrowBack />
            </button>
            <button className={classes.image_slider_btn} style={{right : 0}} onClick={showNextImage}>
                <IoIosArrowForward />
            </button>
            <div className={classes.image_slider_marker}>
                {
                    carouselImages.map((_, index) => (
                    <button 
                        key={index} 
                        className={`${classes.image_slider_marker_btn} ${index === imageIndex ? classes.image_slider_marker_btn_curr : undefined}`} 
                        onClick={() => setImageImdex(index)}>
                        <GoHorizontalRule />
                    </button>))
                }
            </div>
        </div>
    )
}

export default CarouselComponent