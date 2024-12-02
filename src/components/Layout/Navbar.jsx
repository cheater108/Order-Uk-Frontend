import styles from "./Navbar.module.css";
import user_icon from "../../assets/user.svg";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../utils/helpers";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <img src={logo} alt="logo" height={"40px"} />
            </div>
            <div className={styles.right}>
                <NavLink className={styles.navlink} to={"/"}>
                    Home
                </NavLink>
                <a className={styles.navlink}>Special Offers</a>
                <NavLink className={styles.navlink} to={"/restaurant"}>
                    Restaurants
                </NavLink>
                <a className={styles.navlink}>Track Order</a>
                <div className={styles.login_container}>
                    <img src={user_icon} alt="user" />
                    {isLoggedIn() ? (
                        <p onClick={() => navigate("/profile")}>
                            Hey {localStorage.getItem("name").split(" ")[0]}
                        </p>
                    ) : (
                        <p onClick={() => navigate("/user")}>Login/Signup</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
