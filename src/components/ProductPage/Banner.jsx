import styles from "./Banner.module.css";
import order_list from "../../assets/order_list.svg";
import bike from "../../assets/delivery_bike.svg";
import clock from "../../assets/clock.svg";
import { useRef, useState } from "react";
import { searchFood } from "../../api/restaurant";

function Banner({ setMenu }) {
    const [search, setSearch] = useState("");
    const timeRef = useRef(null);

    function searchFoodItem(e) {
        setSearch(e.target.value);

        if (timeRef.current) clearTimeout(timeRef.current);

        timeRef.current = setTimeout(() => {
            searchFood(search)
                .then((data) => setMenu(data))
                .catch((err) => console.log("Error searching for food"));
        }, 300);
    }

    return (
        <>
            <div className={styles.container}>
                <img
                    className={styles.banner_img}
                    src={
                        "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543218/order-uk/banner_nr6fi4.png"
                    }
                    alt="banner"
                />
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
                <img
                    className={styles.food}
                    src={
                        "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/banner2_rosawi.png"
                    }
                    alt="burger"
                />
            </div>
            <div className={styles.below}>
                <h1>All Offers from McDonald’s East London</h1>
                <div className={styles.search}>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search from menu..."
                        onChange={searchFoodItem}
                        value={search}
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
