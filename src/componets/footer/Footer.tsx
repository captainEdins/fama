import styles from "./footer.module.css"
export default function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>GabinaCanCode</div>
            <div className={styles.text}>
                GabinaCanCode creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
}