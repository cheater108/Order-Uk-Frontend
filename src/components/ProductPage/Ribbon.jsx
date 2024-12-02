import styles from "./Ribbon.module.css";

function Ribbon() {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <p>Offers</p>
                <p>Burgers</p>
                <p>Fries</p>
                <p>Snacks</p>
                <p>Salads</p>
                <p>Cold drinks</p>
                <p>Happy Meal®</p>
                <p>Desserts</p>
                <p>Hot drinks</p>
                <p>Sauces</p>
                <p>Orbit®</p>
            </div>
        </div>
    );
}

export default Ribbon;
