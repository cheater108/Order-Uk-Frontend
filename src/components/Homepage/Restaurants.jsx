import styles from "./Restaurants.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularRestaurants } from "../../api/restaurant";

function Restraunts({ heading }) {
    const navigate = useNavigate();
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopularRestaurants().then((data) => {
            setPopular(data.popular_restaurants);
        });
    }, []);

    function openRestaurant(name) {
        navigate(`/restaurant?name=${name}`);
    }

    return (
        <div className={styles.container}>
            <h1>{heading} Restaurants</h1>
            <div className={styles.restraunts_container}>
                {popular.map((restraunt) => (
                    <div
                        key={restraunt._id}
                        className={styles.card}
                        onClick={() => openRestaurant(restraunt.name)}
                    >
                        <img src={restraunt.img} alt={restraunt.name} />
                        <div>
                            <p>{restraunt.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restraunts;
