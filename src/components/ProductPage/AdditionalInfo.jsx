import styles from "./AdditionalInfo.module.css";
import location from "../../assets/tracking.svg";
import account from "../../assets/id-verified.svg";
import clock from "../../assets/clock-2.svg";

function AdditionalInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.info_container}>
                <h1>
                    {" "}
                    <img src={location} alt="" width={"30px"} /> Delivery
                    information
                </h1>

                <p>
                    <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Tuesday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Wednesday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Thursday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Friday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Saturday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Sunday:</span> 8:00 AM–12:00 AM
                </p>
                <p>
                    <span>Estimated time until delivery:</span> 20 min
                </p>
            </div>
            <div className={styles.info_container}>
                <h1>
                    <img src={account} alt="" width={"30px"} />
                    Contact information
                </h1>

                <p>If you have allergies or other dietary</p>
                <p>restrictions, please contact the restaurant. The</p>
                <p>restaurant will provide food-specific</p>
                <p>information upon request.</p>
                <p>
                    <span>Phone number</span>
                </p>
                <p>+934443-43</p>
                <p>
                    <span>Website</span>
                </p>
                <p>http://mcdonalds.uk/</p>
            </div>
            <div className={`${styles.info_container} ${styles.dark}`}>
                <h1>
                    <img src={clock} alt="" width={"30px"} />
                    Operational Times
                </h1>

                <p>
                    <span>Monday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Tuesday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Wednesday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Thursday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Friday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Saturday:</span> 8:00 AM–3:00 AM
                </p>
                <p>
                    <span>Sunday:</span> 8:00 AM–3:00 AM
                </p>
            </div>
        </div>
    );
}

export default AdditionalInfo;
