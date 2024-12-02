import styles from "./Banner.module.css";
import banner from "../../assets/cloudinary/banner.png";
import banner2 from "../../assets/cloudinary/banner2.png";
import order_list from "../../assets/order_list.svg";
import bike from "../../assets/delivery_bike.svg";
import clock from "../../assets/clock.svg";

function Banner() {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.banner_img} src={banner} alt="banner" />
                <div className={styles.banner_left}>
                    <p>I'm lovin' it!</p>
                    <h1 className={styles.name}>McDonald’s East London</h1>
                    <div className={styles.delivery_info}>
                        <div className={styles.info}>
                            <img src={order_list} alt="" />
                            <p>Minimum Order: 12 GBP</p>
                        </div>
                        <div className={styles.info}>
                            <img src={bike} alt="" />
                            <p>Delivery in 20-25 Minutes</p>
                        </div>
                    </div>
                </div>
                <div className={styles.time}>
                    <img src={clock} alt="time" />
                    <p>Open until 3:00 AM</p>
                </div>
                <img className={styles.food} src={banner2} alt="burger" />
            </div>
            <div className={styles.below}>
                <h1>All Offers from McDonald’s East London</h1>
                <div className={styles.search}>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search from menu..."
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
