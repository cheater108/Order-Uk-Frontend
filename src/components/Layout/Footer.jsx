import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import play_store from "../../assets/play-store.svg";
import facebook from "../../assets/Facebook.svg";
import insta from "../../assets/Instagram.svg";
import tiktok from "../../assets/TikTok.svg";
import snapchat from "../../assets/Snapchat.svg";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <img src={logo} alt="" />
                    <img src={play_store} alt="" />
                    <p>
                        Company # 490039-445, Registered withHouse of companies.
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.contact_container}>
                        <p>Get Exclusive Deals in your Inbox</p>
                        <div className={styles.search_container}>
                            <input type="text" placeholder="e.g. EC4R 3TE" />
                            <button>Search</button>
                        </div>
                        <p>we wont spam, read our email policy</p>
                        <div className={styles.socials}>
                            <img src={facebook} alt="" />
                            <img src={insta} alt="" />
                            <img src={tiktok} alt="" />
                            <img src={snapchat} alt="" />
                        </div>
                    </div>
                    <div className={styles.links_container}>
                        <p>Legal pages</p>
                        <p>Terms and conditions</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                        <p>Modern Slavery Statement</p>
                    </div>
                    <div className={styles.links_container}>
                        <p>Important Links</p>
                        <p>Get help</p>
                        <p>Add your restaurant</p>
                        <p>Sign up to deliver</p>
                        <p>Create a business account</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                    <div className={styles.bottom_left}>
                        Order.uk Copyright 2024, All Rights Reserved.
                    </div>
                    <div className={styles.bottom_right}>
                        <p>Privacy Policy </p>
                        <p>Terms</p>
                        <p>Pricing</p>
                        <p>Do not sell or share my personal information</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
