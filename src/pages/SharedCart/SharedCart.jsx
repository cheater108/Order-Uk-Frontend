import styles from "./SharedCart.module.css";
import Restraunts from "../../components/Homepage/Restaurants";
import OderDetails from "../../components/SharedCart/OderDetails";
import Address from "../../components/SharedCart/Address";
import { useState } from "react";

function SharedCart() {
    const [address, setAddress] = useState(false);

    return (
        <div className={styles.container}>
            {address ? (
                <Address setAddress={setAddress} />
            ) : (
                <OderDetails setAddress={setAddress} />
            )}
            <Restraunts heading={"Similar"} />
        </div>
    );
}

export default SharedCart;
