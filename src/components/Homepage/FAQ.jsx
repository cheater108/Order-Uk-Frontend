import styles from "./FAQ.module.css";

function FAQ() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Know more about us!</p>
                <div className={styles.top_right}>
                    <p>Frequent Questions</p>
                    <p>Who we are?</p>
                    <p>Partner Program</p>
                    <p>Help & Support</p>
                </div>
            </div>
            <div className={styles.inner_container}>
                <div className={styles.left}>
                    <p>How does Order.UK work?</p>
                    <p>What payment methods are accepted?</p>
                    <p>Can I track my order in real-time?</p>
                    <p>
                        Are there any special discounts or promotions available?
                    </p>
                    <p>Is Order.UK available in my area?</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <p>Place an Order!</p>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543217/order-uk/order_1_shxm22.svg"
                                }
                                alt="step1"
                            />
                            <p>Place order through our website or Mobile app</p>
                        </div>
                        <div className={styles.card}>
                            <p>Track Progress</p>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543218/order-uk/order_2_asmw8s.svg"
                                }
                                alt="step1"
                            />
                            <p>
                                Your can track your order status with delivery
                                time
                            </p>
                        </div>
                        <div className={styles.card}>
                            <p>Get your Order!</p>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543218/order-uk/order_3_jwqije.svg"
                                }
                                alt="step1"
                            />
                            <p>Recieve your order at a lighting fast speed!</p>
                        </div>
                    </div>
                    <p>
                        Order.UK simplifies the food ordering process. Browse
                        through our diverse menu, select your favorite dishes,
                        and proceed to checkout. Your delicious meal will be on
                        its way to your doorstep in no time!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
