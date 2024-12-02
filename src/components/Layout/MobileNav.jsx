import styles from "./MobileNav.module.css";
import cart from "../../assets/cart.svg";
import pin_icon from "../../assets/location-pin.svg";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../utils/helpers";
import { selectedAdd } from "../../../utils/helpers";

function MobileNav() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    {isLoggedIn() ? (
                        <>
                            <img
                                src="https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985785/order-uk/customer-2_uvrnpj.png"
                                alt=""
                                width={"45px"}
                            />
                            <p onClick={() => navigate("/profile")}>
                                Hey {localStorage.getItem("name").split(" ")[0]}
                            </p>
                        </>
                    ) : (
                        <p onClick={() => navigate("/user")}>Login/Signup</p>
                    )}
                </div>
                <div className={styles.right}>
                    <img src={cart} alt="" />
                    <p>My Cart</p>
                </div>
            </div>
            {localStorage.getItem("address") && (
                <div className={styles.location}>
                    <img src={pin_icon} alt="pin" />
                    <p>{selectedAdd().address.substring(0, 30) + "..."}</p>
                </div>
            )}
        </>
    );
}

export default MobileNav;
