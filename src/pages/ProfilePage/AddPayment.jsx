import { useState } from "react";
import styles from "./AddPayment.module.css";
import { postCard } from "../../api/user";
import toast from "react-hot-toast";
import { validateCard } from "../../../utils/validators";
import cross_icon from "../../assets/plus-circle.svg";

function AddPayment({ setAdd, refreshCards }) {
    const [card, setCard] = useState({
        card_no: "",
        name: "",
        cvc: "",
        exp: "",
    });
    const [loading, setLoading] = useState(false);

    function handleSave() {
        const { valid, error, message } = validateCard(card);
        if (!valid) {
            for (const k in error) {
                if (error[k]) toast.error(message[k]);
            }
            return;
        }

        setLoading(true);
        postCard(card)
            .then((data) => {
                toast.success(data.message);
                refreshCards();
                setAdd(false);
                setLoading(false);
            })
            .catch((err) => {
                toast.error("Error posting card");
                setAdd(false);
                setLoading(false);
            });
    }

    function handleChange(e) {
        setCard({ ...card, [e.target.name]: e.target.value });
    }

    function hide(e) {
        if (e.target.className === styles.modal) setAdd(false);
    }

    return (
        <div className={styles.modal} onClick={hide}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h1>
                        Edit Payment Method{" "}
                        <img
                            src={cross_icon}
                            onClick={() => setAdd(false)}
                            alt=""
                        />
                    </h1>
                    <div className={styles.info}>
                        <p>Card Number</p>
                        <input
                            name="card_no"
                            type="text"
                            value={card.card_no}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.info}>
                        <p>Expiration</p>
                        <input
                            name="exp"
                            type="text"
                            value={card.exp}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.info}>
                        <p>CVC</p>
                        <input
                            name="cvc"
                            type="text"
                            value={card.cvc}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.info}>
                        <p>Name on Card</p>
                        <input
                            name="name"
                            type="text"
                            value={card.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <button
                        className={styles.remove}
                        onClick={() => setAdd(false)}
                    >
                        Remove
                    </button>
                    <div className={styles.bottom_right}>
                        <button
                            className={styles.cancel}
                            onClick={() => setAdd(false)}
                        >
                            Cancel
                        </button>
                        {loading ? (
                            <button className={styles.save}>Saving...</button>
                        ) : (
                            <button
                                className={styles.save}
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPayment;
