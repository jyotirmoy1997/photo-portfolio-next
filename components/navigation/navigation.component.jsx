'use client'
import Link from "next/link"
import { useState, useRef, Fragment } from "react"
import logo from "@/assets/logos/MainLogo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import classes from "./navigation.module.css"
import Image from "next/image";


const Navigation = () => {
    const dropdownRef = useRef(null)
    const navRef = useRef()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [showLinks, setShowLinks] = useState(false)
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
    return(
        <Fragment>
            <div className={classes.navigation}>
                <Link className={classes.logo_container} href="/">
                    <Image 
                    src={logo.src}
                    alt="main-logo" width={120} height={52.5} />
                </Link>
                <div ref={navRef} className={classes.nav_links_container}>
                    <Link onClick={showNavBar} className={classes.nav_link} href="/">
                        Home
                    </Link>
                    <Link onClick={showNavBar} className={classes.nav_link} href="/about">
                        About
                    </Link>
                    <Link onClick={showNavBar} className={classes.nav_link} href="/gallery">
                        Gallery
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
                            <Link onClick={showNavBar} href="/">
                                Brandstand
                            </Link>
                            <Link onClick={showNavBar} href="/">
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