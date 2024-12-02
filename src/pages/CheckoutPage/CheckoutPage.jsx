import styles from "./CheckoutPage.module.css";
import Restraunts from "../../components/Homepage/Restaurants";
import OderDetails from "../../components/CheckoutPage/OderDetails";
import Address from "../../components/CheckoutPage/Address";
import { useState } from "react";

function CheckoutPage() {
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

export default CheckoutPage;
