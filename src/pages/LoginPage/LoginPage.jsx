import { Outlet } from "react-router-dom";
import styles from "./LoginPage.module.css";
import Footer from "../../components/Layout/Footer";
import { Toaster } from "react-hot-toast";

function LoginPage() {
    return (
        <>
            <Toaster />
            <div className={styles.container}>
                <div className={styles.left}>
                    <Outlet />
                </div>
                <div className={styles.cover}></div>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
