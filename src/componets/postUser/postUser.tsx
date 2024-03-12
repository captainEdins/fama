import styles from "./postUser.module.css"
import {getUser} from "@/lib/data";
import Image from "next/image";

async function getData(userId : any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}
export default async function PostUser({userId} : any) {

    // FETCH DATA WITH AN API
    const user = await getUser(userId);
    // FETCH DATA WITHOUT AN API

    return (
        <div className={styles.container}>
              <Image
                src={user?.img ? user?.img : "/noavatar.png"}
                alt="post single Image"
                width={50}
                height={50}
                className={styles.avatar}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user?.username}</span>
            </div>
        </div>
    );
}