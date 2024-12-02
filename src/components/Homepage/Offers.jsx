import styles from "./Offers.module.css";
import popular_categories from "../../data/popularCategories";

function Offers() {
    return (
        <div className={styles.container}>
            <div className={styles.offers_top}>
                <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
                <div className={styles.food_types}>
                    <p>Vegan</p>
                    <p>Sushi</p>
                    <p className={styles.selected}>Pizza & Fast food </p>
                    <p>others</p>
                </div>
            </div>
            <div className={styles.offers}>
                <div className={styles.offer_card}>
                    <img
                        src={
                            "https://res.cloudinary.com/dxcgng2n6/image/upload/v1733062511/order-uk/chef-burger_xz2opl.png"
                        }
                        alt="chef"
                    />
                    <div className={styles.offer_info}>
                        <p>Restaurant</p>
                        <p>Chef Burgers London</p>
                    </div>
                    <div className={styles.off}>-40%</div>
                </div>
                <div className={styles.offer_card}>
                    <img
                        src={
                            "https://res.cloudinary.com/dxcgng2n6/image/upload/v1733062511/order-uk/grand_ai_cg7xm3.png"
                        }
                        alt="chef"
                    />
                    <div className={styles.offer_info}>
                        <p>Restaurant</p>
                        <p>Grand Ai Cafe London</p>
                    </div>
                    <div className={styles.off}>-20%</div>
                </div>
                <div className={styles.offer_card}>
                    <img
                        src={
                            "https://res.cloudinary.com/dxcgng2n6/image/upload/v1733062511/order-uk/chef-burger_xz2opl.png"
                        }
                        alt="chef"
                    />
                    <div className={styles.offer_info}>
                        <p>Restaurant</p>
                        <p>Butterbrot Caf’e London</p>
                    </div>
                    <div className={styles.off}>-17%</div>
                </div>
            </div>
            <div className={styles.heading_two}>
                <h1>Order.uk Popular Categories 🤩</h1>
            </div>
            <div className={styles.categories_container}>
                {popular_categories.map((category) => (
                    <div className={styles.card}>
                        <img src={category.image} alt={category.name} />
                        <div>
                            <p>{category.name}</p>
                            <p>{category.restraunts} Restraunts</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offers;
