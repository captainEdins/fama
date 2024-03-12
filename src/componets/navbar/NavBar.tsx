import Links from "@/componets/navbar/links/Links";
import styles from  "@/componets/navbar/navbar.module.css"
import Link from "next/link";
export default function NavBar() {
    return(
        <div className={styles.container}>
           <Link href={"/"} className={styles.logo}>Logo</Link>
           <div>
               <Links/>
           </div>
        </div>
    );
}