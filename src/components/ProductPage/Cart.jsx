import styles from "./Cart.module.css";
import share from "../../assets/share.svg";
import cart from "../../assets/cart.svg";
import delete_icon from "../../assets/delete.svg";
import arrow_down from "../../assets/arrow-down.svg";
import arrow_green from "../../assets/arrow-right-green.svg";
import arrow_white from "../../assets/arrow-right-white.svg";
import scooter from "../../assets/scooter.svg";
import store from "../../assets/store.svg";
import alert_icon from "../../assets/alert.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { shareCart } from "../../api/share";
import toast, { Toaster } from "react-hot-toast";

function Cart() {
    const navigate = useNavigate();
    const { order, removeItem } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const total = order.reduce((acc, item) => acc + item.count * item.price, 0);

    function handleCheckout() {
        if (total >= 200) navigate("/checkout");
    }

    function handleShare() {
        setLoading(true);
        shareCart(order)
            .then((data) => {
                navigator.clipboard.writeText(
                    `${window.location.origin}/shared/${data.id}`
                );
                toast.success("Cart shared! Link copied.");
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.response.data.error);
                setLoading(false);
            });
    }

    return (
        <div className={styles.container}>
            <Toaster />
            <div className={styles.share}>
                <img src={share} alt="share" width={"40px"} />
                <p>Share this cart with your friends</p>
                {loading ? (
                    <button>Sharing...</button>
                ) : (
                    <button onClick={handleShare}>Copy Link</button>
                )}
            </div>
            <div className={styles.cart_container}>
                <div className={styles.top}>
                    <img src={cart} alt="cart" />
                    <h1>My Basket</h1>
                </div>
                {order.map((item) => {
                    return (
                        <div key={item._id} className={styles.item}>
                            <div className={styles.qty}>{item.count}x</div>
                            <div className={styles.item_info}>
                                <p className={styles.item_price}>
                                    ₹{item.price}
                                </p>
                                <p className={styles.item_name}>{item.name}</p>
                                <p>With extra fries</p>
                            </div>
                            <div
                                className={styles.delete}
                                onClick={() => removeItem(item)}
                            >
                                <img src={delete_icon} alt="delete" />
                            </div>
                        </div>
                    );
                })}
                <div className={styles.bill}>
                    <div>
                        <span>Sub Total: </span>
                        <p>
                            {order.reduce(
                                (acc, item) => acc + item.count * item.price,
                                0
                            )}
                        </p>
                    </div>
                    <div>
                        <span>Discounts:</span>
                        <p>-₹10.00</p>
                    </div>
                    <div>
                        <span>Delivery Fee: </span>
                        <p>₹30.00</p>
                    </div>
                </div>
                <div className={styles.total_container}>
                    <div className={styles.total}>
                        <p>Total to pay</p>
                        <p>₹{total}</p>
                    </div>
                    <div className={styles.addon}>
                        <p>Choose your free item..</p>
                        <img src={arrow_down} alt="" />
                    </div>
                    <div className={styles.addon}>
                        <p>Apply Coupon Code here</p>
                        <img src={arrow_green} alt="" />
                    </div>
                </div>
                <div className={styles.below}>
                    <div className={styles.below_inner}>
                        <div>
                            <img src={scooter} alt="delivery" />
                            <p>Delivery</p>
                            <p>Starts at 17:50</p>
                        </div>
                        <div>
                            <img src={store} alt="store" />
                            <p>Collection</p>
                            <p>Starts at 16:50</p>
                        </div>
                    </div>
                    <div
                        className={`${styles.checkout} ${
                            total < 200 && styles.disabled
                        }`}
                        onClick={handleCheckout}
                    >
                        <img src={arrow_white} alt="checkout" />
                        <p>Checkout!</p>
                        {total < 200 ? (
                            <div className={styles.tooltip}>
                                <img src={alert_icon} alt="" width={"25px"} />
                                <p>
                                    Minimum delivery is ₹200, You must Spend{" "}
                                    <span>₹{200 - total} more</span> for the
                                    checkout!
                                </p>
                            </div>
                        ) : (
                            <div
                                className={styles.tooltip}
                                style={{ bottom: "-88px" }}
                            >
                                <img src={alert_icon} alt="" width={"25px"} />
                                <p>
                                    We are open now, but delivery starts at
                                    <span>18:00</span> however you may order and
                                    collect in store now
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
