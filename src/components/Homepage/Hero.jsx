import styles from "./Hero.module.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-right-circle.svg";

function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.left}>
                    <p>Order Restaurant food, takeaway and groceries.</p>
                    <h1>Feast Your Senses,</h1>
                    <h1 className={styles.heading}>Fast and Fresh</h1>
                    <p>Enter a postcode to see what we deliver</p>
                    <div className={styles.search_container}>
                        <input type="text" placeholder="e.g. EC4R 3TE" />
                        <button>Search</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.orange_div}>
                        <img
                            className={styles.eat2}
                            src={
                                "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985286/order-uk/eat2_cloudinary_joxl3u.png"
                            }
                            alt=""
                        />
                        <div className={`${styles.info} ${styles.one}`}>
                            <div className={styles.info_top}>
                                <img src={logo} width={"55px"} />
                                <p>now</p>
                            </div>
                            <p>We’ve Received your order!</p>
                            <p>Awaiting Restaurant acceptance </p>
                            <h1 className={styles.info_number}>1</h1>
                        </div>
                        <div className={`${styles.info} ${styles.two}`}>
                            <div className={styles.info_top}>
                                <img src={logo} width={"55px"} />
                                <p>now</p>
                            </div>
                            <p>Order Accepted! </p>
                            <p>Your order will be delivered shortly </p>
                            <h1 className={styles.info_number}>2</h1>
                        </div>
                        <div className={`${styles.info} ${styles.three}`}>
                            <div className={styles.info_top}>
                                <img src={logo} width={"55px"} />
                                <p>now</p>
                            </div>
                            <p>Your rider's nearby</p>
                            <p>They almost there - get ready! </p>
                            <h1 className={styles.info_number}>3</h1>
                        </div>
                    </div>
                </div>
                <img
                    className={styles.eat1}
                    src={
                        "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985285/order-uk/eat1_cloudinary_ajqvcg.png"
                    }
                    alt=""
                />
            </div>
            <div className={styles.mobile_hero}>
                <p>Order Restaurant food, takeaway and groceries.</p>
                <h1>Feast Your Senses,</h1>
                <h1>
                    <span>Fast and Fresh</span>
                </h1>
                <p>Enter a postcode to see what we deliver</p>
                <div className={styles.mobile_input}>
                    <input type="text" placeholder="e.g. EC4R 3TE" />
                    <div>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
