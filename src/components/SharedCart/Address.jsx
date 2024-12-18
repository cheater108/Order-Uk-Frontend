import styles from "./Address.module.css";
import arrow from "../../assets/arrow-left-2.svg";
import AddAddress from "./AddAddress";
import { useEffect, useState } from "react";
import { getAddress } from "../../api/user";

function Address({ setAddress }) {
    const [add, setAdd] = useState(false);
    const [address, setAddressInfo] = useState([]);

    useEffect(() => {
        getAddress().then((data) => setAddressInfo(data.addresses));
    }, []);

    function isSelectedAdd(id) {
        const selected_add = JSON.parse(localStorage.getItem("address"));
        if (selected_add) {
            return id.toString() === selected_add._id.toString();
        }
        return false;
    }

    function refreshAddress() {
        getAddress().then((data) => setAddressInfo(data.addresses));
    }

    function handleSelect(selected_add) {
        localStorage.setItem("address", JSON.stringify(selected_add));
        setAddress([...address]);
    }

    return (
        <>
            <div className={styles.top}>
                <img onClick={() => setAddress(false)} src={arrow} alt="back" />
                <p>Your Addresses</p>
            </div>
            <div className={styles.container}>
                <div className={styles.add} onClick={() => setAdd(true)}>
                    <div>+</div>
                    <p>Add Address</p>
                </div>
                {address.map((elem) => (
                    <div
                        key={elem._id}
                        className={styles.card}
                        onClick={() => handleSelect(elem)}
                    >
                        <div>
                            <div className={styles.address_top}>
                                <p>{localStorage.getItem("name")}</p>
                                {isSelectedAdd(elem._id) && (
                                    <p className={styles.default}>Default</p>
                                )}
                            </div>
                            <p className={styles.address_detail}>
                                {elem.address}
                            </p>
                            <p>Phone Number: {elem.phone}</p>
                        </div>
                        <div className={styles.edit}>
                            <p>Edit</p>
                            <p>Remove</p>
                        </div>
                    </div>
                ))}
            </div>
            {add && (
                <AddAddress setAdd={setAdd} refreshAddress={refreshAddress} />
            )}
        </>
    );
}

export default Address;
