import PaymentOption from "../../components/PaymentPage/PaymentOption";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
    return (
        <div className={styles.container}>
            <PaymentOption />
        </div>
    );
}

export default PaymentPage;
