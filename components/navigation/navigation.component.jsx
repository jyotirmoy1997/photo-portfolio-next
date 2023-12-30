'use client'
import Link from "next/link"
import { useState, useRef, Fragment } from "react"
import logo from "@/public/logos/MainLogo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import classes from "./navigation.module.css"
import Image from "next/image";
import { usePathname } from "next/navigation";


const Navigation = () => {
    const dropdownRef = useRef(null)
    const navRef = useRef()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [showLinks, setShowLinks] = useState(false)
    const currentPage = usePathname()
    const toggleDropdown = () => {
        if(isDropdownOpen){
            dropdownRef.current.classList.remove(classes.dropdown_hide)
            setIsDropdownOpen(false)
        }
        else{
            dropdownRef.current.classList.add(classes.dropdown_hide)
            setIsDropdownOpen(true)
        }
    }
    const showNavBar = () => {
        navRef.current.classList.toggle(classes.responsive_nav)
    }
    const activeClassHome = currentPage === "/" ? classes.active : undefined
    const activeClassAbout = currentPage === "/about" ? classes.active : undefined
    const activeClassGallery = currentPage === "/gallery" ? classes.active : undefined
    return(
        <Fragment>
            <div className={classes.navigation}>
                <Link href="/">
                    <Image 
                    src={logo.src}
                    alt="main-logo" width={120} height={52.5} priority />
                </Link>
                <div ref={navRef} className={classes.nav_links_container}>
                    <Link onClick={showNavBar} className={classes.nav_link} href="/">
                        <div className={activeClassHome}>Home</div>
                    </Link>
                    <Link onClick={showNavBar} className={`${classes.nav_link}`} href="/about">
                        <div className={`${activeClassAbout}`}>About</div>
                    </Link>
                    <Link onClick={showNavBar} className={`${classes.nav_link}`} href="/gallery">
                    <div className={`${activeClassGallery}`}>Gallery</div>
                    </Link>
                    <div onClick={() => toggleDropdown()} className={`${classes.nav_link} ${classes.dropdown_wrapper}`}>
                        <span>Services</span><span><IoMdArrowDropdown/></span>
                        <div ref={dropdownRef} className={`${classes.dropdown_container} ${classes.dropdown_hide}`}>
                            <Link onClick={showNavBar} href="/bibahoscapes">
                                Bibaho Scapes
                            </Link>
                            <Link onClick={showNavBar} href="/pixelperfect">
                                Pixel Perfect
                            </Link>
                            <Link onClick={showNavBar} href="/brandstand">
                                Brandstand
                            </Link>
                            <Link onClick={showNavBar} href="/mediapedia">
                                Media Pedia
                            </Link>
                        </div>
                    </div>
                <button className={`${classes.nav_btn} ${classes.nav_close_btn}`} onClick={showNavBar} >
                        <GrClose/>
                </button>
            </div>
            <button className={classes.nav_btn} onClick={showNavBar}>
                    <GiHamburgerMenu/>
            </button>
            </div>
        </Fragment>
    )
}

export default Navigation