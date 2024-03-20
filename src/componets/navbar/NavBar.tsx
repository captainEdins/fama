import Links from "@/componets/navbar/links/Links";
import styles from  "@/componets/navbar/navbar.module.css"
import Link from "next/link";
import {appName} from "@/componets/constants/constants";
import {auth} from "@/lib/auth";
export default async function NavBar() {

    const session = await auth();

    console.log(session);

    return (
        <div className={styles.container}>
           <Link href={"/"} className={styles.logo}>{appName}</Link>
           <div>
               <Links session={session}/>
           </div>
        </div>
    );
}