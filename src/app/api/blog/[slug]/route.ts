import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import {Post} from "@/lib/model";

export  async function GET(request : any, { params } : any) {
    const { slug } = params;

    try {
        await connectToDb();

        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
}

export async function DELETE (request : any, { params } : any) {
    const { slug } = params;

    try {
        await connectToDb();

        await Post.deleteOne({ slug });
        return NextResponse.json("Post deleted");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete post!");
    }
};