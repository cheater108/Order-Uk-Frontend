import styles from "./OrderDetails.module.css";
import arrow from "../../assets/arrow-left-2.svg";
import pin from "../../assets/location-orange.svg";
import arrow_right from "../../assets/arrow-right-orange.svg";
import pizza from "../../assets/cloudinary/pizza-checkout.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { selectedAdd } from "../../../utils/helpers";

function OderDetails({ setAddress }) {
    const navigate = useNavigate();
    const { order } = useContext(AppContext);
    const total = order.reduce((acc, item) => acc + item.count * item.price, 0);
    const total_items = order.reduce((acc, item) => acc + item.count, 0);

    return (
        <>
            <div className={styles.top}>
                <img
                    onClick={() => navigate("/restaurant")}
                    src={arrow}
                    alt="back"
                />
                <p>Your Order Details</p>
            </div>
            <div className={styles.order_container}>
                <div className={styles.left}>
                    {order.map((item) => (
                        <div className={styles.item}>
                            <img src={item.img} alt="item" width={"48px"} />
                            <div className={styles.item_details}>
                                <p>{item.name}</p>
                                <p>{item.count}x item</p>
                            </div>
                            <p className={styles.price}>
                                ₹{item.count * item.price}
                            </p>
                        </div>
                    ))}
                    <div className={styles.bottom}>
                        <p>Notes</p>
                        <input type="text" placeholder="Add order notes" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div
                        className={styles.address}
                        onClick={() => setAddress(true)}
                    >
                        <div className={styles.pin}>
                            <img src={pin} alt="" />
                        </div>
                        <div className={styles.add_details}>
                            <p>Delivery Address</p>
                            {localStorage.getItem("address") ? (
                                <p>
                                    {selectedAdd().address.substring(0, 20) +
                                        "..."}
                                </p>
                            ) : (
                                <p>Select a address</p>
                            )}
                        </div>
                        <img src={arrow_right} alt="add" />
                    </div>
                    <div className={styles.bill}>
                        <div className={styles.bill_item}>
                            <p>Items</p>
                            <p>₹{total + 20}</p>
                        </div>
                        <div className={styles.bill_item}>
                            <p>Sales Tax</p>
                            <p>₹10</p>
                        </div>
                    </div>
                    <div className={styles.total}>
                        <p>Subtotal ({total_items} items)</p>
                        <p className={styles.totol_price}>₹{total + 30}</p>
                    </div>
                    <button onClick={() => navigate("/payment")}>
                        Choose Payment Method
                    </button>
                </div>
            </div>
        </>
    );
}

export default OderDetails;
