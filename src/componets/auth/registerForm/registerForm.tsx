"use client"

import styles from "./registerForm.module.css"
import {register} from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
export default function RegisterForm() {

    const [state, formAction] = useFormState(register, undefined);


    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username"/>
            <input type="email" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <input
                type="password"
                placeholder="password again"
                name="passwordRepeat"
            />
            <button>Register</button>
            {state?.error}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
}