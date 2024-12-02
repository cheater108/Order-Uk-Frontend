import styles from "./Header.module.css";
import star_icon from "../../assets/star.png";
import pin_icon from "../../assets/location-pin.svg";
import cart_icon from "../../assets/cart.svg";
import down_icon from "../../assets/down-arrow.svg";
import { selectedAdd } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

function Header() {
    const navigate = useNavigate();
    const { order } = useContext(AppContext);
    const total = order.reduce((acc, item) => acc + item.count * item.price, 0);

    return (
        <div className={styles.top_container}>
            <div className={styles.top_left}>
                <img src={star_icon} alt="star" width={"20px"} />
                <p className={styles.offer}>
                    Get 5% Off your first order,
                    <span>&nbsp;Promo: ORDER5</span>
                </p>
            </div>
            <div className={styles.top_right}>
                <div className={styles.location_container}>
                    {localStorage.getItem("address") && (
                        <>
                            <img src={pin_icon} alt="pin" width={"20px"} />
                            <p className={styles.location}>
                                {selectedAdd().address.substring(0, 30) + "..."}
                            </p>
                        </>
                    )}
                    <p className={styles.change_location}>Change Location</p>
                </div>
                <div
                    className={styles.cart_container}
                    onClick={() => navigate("/checkout")}
                >
                    <div className={styles.cart_icon}>
                        <img src={cart_icon} alt="cart" height={"30px"} />
                        <p>My Cart</p>
                    </div>
                    <div className={styles.cart_price}>
                        {order.length > 0 && <p>₹{total + 30}</p>}
                    </div>
                    <div className={styles.cart_down}>
                        <img src={down_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.mobile_header}>
                <div className={styles.mobile_left}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.mobile_img}>
                    <img src={menu} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;
