import {connectToDb} from "@/lib/utils";
import {Post} from "@/lib/model";
import {NextResponse} from "next/server";

export async function GET(request : any){
    try {

        await connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
}