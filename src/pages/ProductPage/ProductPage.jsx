import Banner from "../../components/ProductPage/Banner";
import Menu from "../../components/ProductPage/Menu";
import styles from "./ProductPage.module.css";
import AdditionalInfo from "../../components/ProductPage/AdditionalInfo";
import Reviews from "../../components/ProductPage/Reviews";
import Restaurants from "../../components/Homepage/Restaurants";
import Map from "../../components/ProductPage/Map";
import MobileNav from "../../components/Layout/MobileNav";
import { useState, useEffect } from "react";
import { getMenu } from "../../api/restaurant";

function ProductPage() {
    const [menu, setMenu] = useState({
        burger: [],
        fries: [],
        cold_drinks: [],
    });

    useEffect(() => {
        getMenu("Common")
            .then((data) => setMenu(data))
            .catch((err) => console.log("error fetching menu"));
    }, []);

    return (
        <div className={styles.container}>
            <MobileNav />
            <Banner setMenu={setMenu} />
            <Menu menu={menu} />
            <AdditionalInfo />
            <Map />
            <Reviews />
            <div className={styles.inner}>
                <Restaurants heading={"Similar"} />
            </div>
        </div>
    );
}

export default ProductPage;
