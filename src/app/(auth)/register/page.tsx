import styles from "./register.module.css"
import RegisterForm from "@/componets/auth/registerForm/registerForm";

export default function RegisterPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <RegisterForm/>
            </div>
        </div>
    );
}