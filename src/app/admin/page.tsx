import styles from "./admin.module.css"
import {Suspense} from "react";
import AdminPostForm from "@/componets/adminPostForm/adminPostForm";
import AdminUserForm from "@/componets/adminUserForm/adminUserForm";
import AdminUser from "@/componets/adminUser/adminUser";
import AdminPost from "@/componets/adminPost/adminPost";
import {auth} from "@/lib/auth";

export default async function AdminPage() {

    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPost/>
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm  userId = {session?.user?.id}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUser/>
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm/>
                </div>
            </div>
        </div>
    );
}