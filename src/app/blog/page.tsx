import styles from "./blog.module.css"
import PostCard from "@/componets/postCard/postCard";
import {getPosts} from "@/lib/data";

async function getData() {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}
export default async function BlogPage() {

    // FETCH DATA WITH AN API
    const posts = await getData();
    //const posts = await getPosts();
    // FETCH DATA WITHOUT AN API

    return (
        <div className={styles.container}>
            {posts.map((post:any) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}

        </div>
    );
}