import {handleGithubLogin} from "@/lib/action";
import LoginForm from "@/componets/auth/loginForm/loginForm";
import styles from "./login.module.css"

export default  function LoginPage() {

    return(
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <form action={handleGithubLogin}>
                <button className={styles.github}>Login with Github</button>
            </form>
           <LoginForm/>
        </div>
        </div>
    );
}