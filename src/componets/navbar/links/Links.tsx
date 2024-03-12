"use client";

import styles from "./links.module.css"
import NavLink from "@/componets/navbar/links/navLink/navLink";
import {useState} from "react";
import Image from "next/image";

const links = [
    {
        title : "Home",
        path : "/"
    },
    {
        title : "About",
        path : "/about"
    },
    {
        title : "Contact",
        path : "/contact"
    },
    {
        title : "Blog",
        path : "/blog"
    }
];

export default function Links() {

    const [open,setOpen] = useState(false)

    //Temporary
    const session = true;
    const isAdmin = true;



    return(
        <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) =>(
                <NavLink item={link} key = {link.title}/>
            ))}{
            session ? (
                <>
                    {isAdmin && (
                        <NavLink item ={{title:"Admin",path:"/admin"}}/>
                    )}
                    <button className={styles.logout}>Logout</button>
                </>

            ) : (
                <NavLink item ={{title:"Login",path:"/login"}}/>
            )
        }
        </div>
            <Image className={styles.menuButton} src={"/menu.png"} alt={""} onClick={() => setOpen(prevState => !prevState)} width={30} height={30}/>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) =>(
                        <NavLink item={link} key = {link.title}/>
                    ))}
                </div>
            }
        </div>

    );
}