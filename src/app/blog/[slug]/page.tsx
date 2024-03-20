import styles from "./singlePost.module.css"
import Image from "next/image";
import PostUser from "@/componets/postUser/postUser";
import {Suspense} from "react";
import {getPost} from "@/lib/data";

async function getData(slug : any) {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}

export async function generateMetadata({params} : any) {
    const {slug} = params;
    const posts = await getPost(slug);

    return {
        title : posts?.title,
        description : posts?.desc
    }
}
export default async function SinglePostPage({params} : any) {

    const {slug} = params;

    // FETCH DATA WITH AN API
    const posts = await getData(slug);
    //const posts = await getPost(slug);


    // FETCH DATA WITHOUT AN API

    return (
        <div className={styles.container}>
            {posts.img && <div className={styles.imageContainer}>
                <Image
                    src={posts.img}
                    alt="post single Image"
                    fill
                    className={styles.img}
                />
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{posts?.title}</h1>
                <div className={styles.detail}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {posts.userId}/>
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{posts?.createdAt.toString().slice(4,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {posts?.desc}
                </div>
            </div>

        </div>
    );
}