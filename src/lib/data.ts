import {connectToDb} from "@/lib/utils";
import {Post, User} from "@/lib/model";
import { unstable_noStore as noStore } from "next/cache";

export async function getPosts() {
    try{
        await connectToDb();
        return await Post.find();
    }catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Post");
    }
}

export async function getPost(slug : any) {
    try {
        await connectToDb();
        return await Post.findOne({slug});
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }
}

export async function getUser(id : any) {
    noStore();
    try {
        await connectToDb();
        return await User.findById(id);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user!");
    }
}

export async function getUsers() {
    try {
        await connectToDb();
        return await User.find();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!");
    }
}