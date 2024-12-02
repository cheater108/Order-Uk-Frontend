import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

function Layout() {
    return (
        <>
            <div>
                <Header />
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
