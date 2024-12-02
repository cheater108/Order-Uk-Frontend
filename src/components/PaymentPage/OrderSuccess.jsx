import styles from "./OrderSuccess.module.css";
import success from "../../assets/success.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import postOrder from "../../api/order";

function OrderSuccess() {
    const navigate = useNavigate();
    const { order, updateCart } = useContext(AppContext);
    const [confirmed_order, setConfirmed] = useState([]);

    useEffect(() => {
        postOrder(order)
            .then((data) => {
                setConfirmed(data.order);
                updateCart([]);
            })
            .catch((err) => console.log("Error order not placed"));
    }, []);

    return (
        <div className={styles.container}>
            {confirmed_order.length > 0 ? (
                <>
                    <div className={styles.success}>
                        <img src={success} alt="success" />
                    </div>
                    <p>Order Placed Successfully</p>
                    <p>
                        Your order is confirmed and on its way. Get set to savor
                        your chosen delights!
                    </p>
                    <div className={styles.details}>
                        {confirmed_order.map((item) => (
                            <p>{item.name}</p>
                        ))}
                        <button onClick={() => navigate("/")}>
                            Back to Home
                        </button>
                    </div>{" "}
                </>
            ) : (
                <p>No order Placed. Please Place an order.</p>
            )}
        </div>
    );
}

export default OrderSuccess;
