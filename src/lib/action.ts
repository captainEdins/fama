"use server"

import {connectToDb} from "@/lib/utils";
import {Post, User} from "@/lib/model";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";
export async function addPost(previousState : any,formData: any) {

    const {title, desc, slug, userId}: any = Object.fromEntries(formData);

    try {
        await connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        revalidatePath("/blog");
        console.log("Saved to database");

    } catch (error) {
        console.log(error);

        return {error: "Something went wrong!"}
    }
}

export async function deletePost(formData: any) {
    const {id} = Object.fromEntries(formData);

    try {
        await connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
}

export async function addUser (prevState : any,formData : any) {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        await connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export async function deleteUser(formData: any) {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}


export async function handleGithubLogin() {
    await signIn("github");
}

export async function handleLogout() {
    await signOut();
}

export async function register( previousState : any ,formData: any) {
    const {username, email, password, img, passwordRepeat} =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return {error: "Passwords do not match"};
    }

    try {
        await connectToDb();

        const user = await User.findOne({username});

        if (user) {
            return {error: "Username already exists"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");

        return {success: true};
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
}

export async function login(previousState : any ,formData: any) {
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn("credentials", {username, password});
    } catch (err : any) {
        console.log(err);

        if (err.toString().includes("CredentialsSignin")) {
            return {error: "Invalid username or password"};
        }
        throw err;
    }
}
