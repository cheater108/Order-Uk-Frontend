import { useState } from "react";
import styles from "./AddPayment.module.css";
import { postCard } from "../../api/user";
import toast from "react-hot-toast";

function AddPayment({ setAdd, refreshCards }) {
    const [card, setCard] = useState({
        card_no: "",
        name: "",
        cvc: "",
        exp: "",
    });

    function handleSave() {
        postCard(card)
            .then((data) => {
                toast.success(data.message);
                refreshCards();
                setAdd(false);
            })
            .catch((err) => {
                toast.error("Error posting card");
                setAdd(false);
            });
    }

    function handleChange(e) {
        setCard({ ...card, [e.target.name]: e.target.value });
    }

    function hide(e) {
        if (e.target === styles.modal) setAdd(false);
    }

    return (
        <div className={styles.modal} onClick={hide}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h1>Edit Payment Method</h1>
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
                        disabled
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
                        <button className={styles.save} onClick={handleSave}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPayment;
