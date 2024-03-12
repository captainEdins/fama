import styles from "./postCard.module.css"
import Image from "next/image";
import Link from "next/link";
export default function PostCard({ post } : any) {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imageContainer}>
                    <Image
                        src={post.img}
                        alt="post Image"
                        fill
                        className={styles.img}
                    />
                </div>}
                <span className={styles.date}>01.02.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    );
}