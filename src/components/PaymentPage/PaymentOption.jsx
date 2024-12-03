import styles from "./PaymentOption.module.css";
import arrow from "../../assets/arrow-left-2.svg";
import wallet from "../../assets/wallet.svg";
import arrow_right from "../../assets/arrow-right-orange.svg";
import arrow_circle from "../../assets/arrow-left-circle.svg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { getCards } from "../../api/user";
import { useNavigate } from "react-router-dom";

function PaymentOption() {
    const navigate = useNavigate();
    const { order } = useContext(AppContext);
    const [cards, setCards] = useState([]);
    const total = order.reduce((acc, item) => acc + item.count * item.price, 0);
    const total_items = order.reduce((acc, item) => acc + item.count, 0);

    useEffect(() => {
        getCards()
            .then((data) => setCards(data.payments))
            .catch((err) => toast.error("Error fetching cards"));
    });

    return (
        <>
            <div className={styles.top}>
                <img
                    className="desktop_back"
                    src={arrow}
                    alt="back"
                    onClick={() => navigate("/checkout")}
                />
                <img
                    className="mobile_back"
                    src={arrow_circle}
                    alt=""
                    onClick={() => navigate("/checkout")}
                />
                <p>Choose and Pay</p>
            </div>
            <div className={styles.order_container}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <div className={styles.item_left}>
                            <div className={styles.icon}>
                                <img src={wallet} alt="" />
                            </div>
                            <div>
                                <p className={styles.wallet}>Wallet</p>
                                <p>Available balance: ₹300</p>
                            </div>
                        </div>
                        <img src={arrow_right} alt="" />
                    </div>
                    <hr />
                    {cards.map((card) => (
                        <div className={styles.item}>
                            <div className={styles.item_left}>
                                <div className={styles.icon}>
                                    <img src={wallet} alt="" />
                                </div>
                                <div>
                                    <p className={styles.wallet}>
                                        {card.card_no}
                                    </p>
                                    <p>{card.name}</p>
                                </div>
                            </div>
                            <input name="selected" type="radio" />
                        </div>
                    ))}
                    <div className={`${styles.bottom}`}>
                        <span>+</span> Add Debit Card
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.total}>
                        <p>Subtotal ({total_items} items)</p>
                        <p className={styles.totol_price}>₹{total + 30}</p>
                    </div>
                    <hr />
                    <button onClick={() => navigate("/payment/success")}>
                        Proceed Payment
                    </button>
                </div>
            </div>
        </>
    );
}

export default PaymentOption;
