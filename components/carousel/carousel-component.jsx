'use client'

import Carousel from 'react-bootstrap/Carousel';
import { carouselImages } from '@/assets/imageLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./carousel.module.css"
import Image from 'next/image';

const CarouselList = carouselImages.map((img, index) => {
    return(
        <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={img}
                alt="First slide"
            />
        </Carousel.Item>
    )
})

const CarouselComponent = () => {
    return (
        <div className={classes.carousel_container}>
            <Carousel interval={3000} pause={true}>
                {CarouselList}
            </Carousel>
        </div>
    );
  }

export default CarouselComponent;