import styles from "./Stats.module.css";

function Stats() {
    return (
        <div className={styles.container}>
            <div className={styles.stat}>
                <h1>546+</h1>
                <p>Registered riders</p>
            </div>
            <div className={styles.stat}>
                <h1>789,900+</h1>
                <p>Orders Delivered</p>
            </div>
            <div className={styles.stat}>
                <h1>690+</h1>
                <p>Restraunts Partnered</p>
            </div>
            <div className={styles.stat}>
                <h1>17,457+</h1>
                <p>Food items</p>
            </div>
        </div>
    );
}

export default Stats;
