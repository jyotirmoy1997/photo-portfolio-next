'use client'

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { isEmpty } from "@/utils/utils"
import Image from "next/image"
import { imageAlbums } from "@/assets/imageLinks.js"
import fblogo from "@/public/logos/facebook.png"
import instalogo from "@/public/logos/instagram.png"
import { MoonLoader } from "react-spinners"
import classes from "./images-page.module.css"


// const imageStyle = {
//     height: '100%',
//     width : 'auto'
// }


// const ImagePage = ({imageAlbum}) => {
//     const [currAlbumInfo, setCurrAlbumInfo] = useState({})
//     useEffect(() => {
//         setCurrAlbumInfo(imageAlbums[imageAlbum])
//     }, [imageAlbum])

//     if(isEmpty(currAlbumInfo)){
//         return(
//             <div className={classes.image_page_wrapper_alt}>
//                 <MoonLoader
//                     color="Grey"
//                     loading
//                     cssOverride={override}
//                     size={70}
//                     aria-label="Loading Spinner"
//                     data-testid="loader"
//                 />
//             </div>
//         )
//     }
//     else if(currAlbumInfo === undefined){
//         notFound()
//     }
//     else{
//         return(
//             <>  
//                 <div className={classes.image_page_wrapper}>
//                     <div className={classes.image_desc_wrapper}>
//                         <div className={classes.image_desc}>
//                             <div className={classes.image_content}>
//                                 <h3>{currAlbumInfo.text}</h3>
//                                 <p>{currAlbumInfo.images.length} Photos</p>
//                             </div>
//                             <div className={classes.image_content}>
//                                 <h5>Category</h5>
//                                 <h6>{currAlbumInfo.category}</h6>
//                             </div>
//                             <div className={classes.image_content}>
//                                 <h5>Links</h5>
//                                 <div className={classes.image_desc_link_container}>
//                                     <a href="https://www.facebook.com/profile.php?id=100084598611956" target="_blank"><Image src={fblogo.src} alt="" width={30} height={30} /></a>
//                                     <a href="https://www.instagram.com/dandd.productions/" target="_blank"><Image src={instalogo.src} alt="" width={30} height={30} /></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className={classes.gallery_image_slider}>
//                         {
//                             currAlbumInfo.images.map((image, index) => {
//                                 return(
//                                     <div key={index} className={`${classes.img_x}`}>
//                                         <Image
//                                             src={image} 
//                                             alt=""
//                                             width={0}
//                                             height={0}
//                                             sizes="100vw"
//                                             style={imageStyle}
//                                             priority
//                                             quality={50}
//                                              />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }


// export default ImagePage

// Import necessary modules and components

// Import necessary modules and components

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const ImagePage = ({ imageAlbum }) => {
  const [currAlbumInfo, setCurrAlbumInfo] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setCurrAlbumInfo(imageAlbums[imageAlbum]);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageAlbum]);

  // Choose the appropriate style based on screen size
  const imageStyle = isSmallScreen
    ? {
        height: '100%',
        width: '100%',
      }
    : {
        height: '100%',
        width: 'auto',
      };

  if (isEmpty(currAlbumInfo)) {
    return (
      <div className={classes.image_page_wrapper_alt}>
        <MoonLoader
          color="Grey"
          loading
          cssOverride={override}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else if (currAlbumInfo === undefined) {
    notFound();
  } else {
    return (
      <>
        <div className={classes.image_page_wrapper}>
          <div className={classes.image_desc_wrapper}>
            <div className={classes.image_desc}>
              <div className={classes.image_content}>
                <h3>{currAlbumInfo.text}</h3>
                <p>{currAlbumInfo.images.length} Photos</p>
              </div>
              <div className={classes.image_content}>
                <h5>Category</h5>
                <h6>{currAlbumInfo.category}</h6>
              </div>
              <div className={classes.image_content}>
                <h5>Social Links</h5>
                <div className={classes.image_desc_link_container}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084598611956"
                    target="_blank"
                  >
                    <Image
                      src={fblogo.src}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/dandd.productions/"
                    target="_blank"
                  >
                    <Image
                      src={instalogo.src}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.gallery_image_slider}>
            {currAlbumInfo.images.map((image, index) => (
              <div key={index} className={`${classes.img_x}`}>
                <Image
                  src={image}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={imageStyle}
                  priority
                  quality={50}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default ImagePage;

  