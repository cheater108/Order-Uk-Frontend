import styles from "./Adverts.module.css";
import logo from "../../assets/logo.svg";
import play_store from "../../assets/play-store.svg";

function Adverts() {
    return (
        <div className={styles.container}>
            <div className={styles.download_container}>
                <img
                    className={styles.friends}
                    src={
                        "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543217/order-uk/friends-laughing_ezxuun.png"
                    }
                    alt="download"
                />
                <img
                    className={styles.friends_two}
                    src={
                        "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543217/order-uk/friends-laughing_ezxuun.png"
                    }
                    alt="download"
                />
                <div className={styles.download_right}>
                    <h1 className={styles.heading_one}>
                        <img src={logo} alt="logo" /> ing is more{" "}
                    </h1>
                    <h1 className={styles.heading_two}>
                        <span>Personalised</span> & Instant
                    </h1>
                    <p>Download the Order.uk app for faster ordering</p>
                    <img src={play_store} alt="" width={"70%"} />
                </div>
            </div>
            <div className={styles.join_us}>
                <div className={styles.join_card}>
                    <img
                        src={
                            "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543219/order-uk/partner_cook_qppffy.png"
                        }
                        alt="partner"
                    />
                    <div className={styles.join_info}>
                        <p>Signup as a business</p>
                        <h1>Partner with us</h1>
                        <button>Get Started</button>
                    </div>
                    <div className={styles.top_info}>
                        <p>Earn more with lower fees</p>
                    </div>
                </div>
                <div className={styles.join_card}>
                    <img
                        src={
                            "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543219/order-uk/partner_delivery_gfbdbv.png"
                        }
                        alt="partner"
                    />
                    <div className={styles.join_info}>
                        <p>Signup as a rider</p>
                        <h1>Ride with us</h1>
                        <button>Get Started</button>
                    </div>
                    <div className={styles.top_info}>
                        <p>Avail exclusive perks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adverts;
