import styles from "./ProfilePage.module.css";
import arrow from "../../assets/arrow-left-2.svg";
import card from "../../assets/credit-card.svg";
import edit_icon from "../../assets/edit.svg";
import AddPayment from "./AddPayment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getCards } from "../../api/user";
import { cardNumWithSpaces } from "../../../utils/helpers";
import EditPayment from "./EditPayment";

function ProfilePage() {
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [cards, setCards] = useState([]);

    function refreshCards() {
        getCards()
            .then((data) => setCards(data.payments))
            .catch((err) => toast.error("Error fetching cards"));
    }

    useEffect(() => {
        refreshCards();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <Toaster />
                <div className={styles.top}>
                    <img src={arrow} alt="back" onClick={() => navigate("/")} />
                    <p>My Profile</p>
                </div>
                <div className={styles.user}>
                    <div className={styles.user_left}>
                        <img
                            src={
                                "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985785/order-uk/customer-2_uvrnpj.png"
                            }
                            alt="user"
                        />
                        <p>{localStorage.getItem("name")}</p>
                    </div>
                    <button>Edit</button>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.info}>
                        <p>Full Name</p>
                        <p>{localStorage.getItem("name")}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Email Address</p>
                        <p>{localStorage.getItem("email")}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Gender</p>
                        <p>Male</p>
                    </div>
                    <div className={styles.info}>
                        <p>Country</p>
                        <p>India</p>
                    </div>
                </div>
                <div className={styles.payments_info}>
                    <p>Saved Payment Methods</p>
                    <div className={styles.payments}>
                        {cards.map((info) => (
                            <div key={info._id} className={styles.card}>
                                <div className={styles.card_img}>
                                    <img src={card} alt="" />
                                </div>
                                <div className={styles.card_info}>
                                    <p>{cardNumWithSpaces(info.card_no)}</p>
                                    <p>{info.name}</p>
                                </div>
                                <img
                                    src={edit_icon}
                                    alt=""
                                    onClick={() => setEdit(info._id)}
                                />
                            </div>
                        ))}
                        <div
                            onClick={() => setAdd(true)}
                            className={styles.add_card}
                        >
                            <div className={styles.card_img}>
                                <p>+</p>
                            </div>
                            <div className={styles.add_info}>
                                <p>Add New Card</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {add && <AddPayment setAdd={setAdd} refreshCards={refreshCards} />}
            {edit && (
                <EditPayment
                    card_id={edit}
                    setEdit={setEdit}
                    refreshCards={refreshCards}
                />
            )}
        </>
    );
}

export default ProfilePage;
