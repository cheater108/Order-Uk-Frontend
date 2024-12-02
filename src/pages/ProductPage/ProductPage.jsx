import Banner from "../../components/ProductPage/Banner";
import Menu from "../../components/ProductPage/Menu";
import styles from "./ProductPage.module.css";
import AdditionalInfo from "../../components/ProductPage/AdditionalInfo";
import Reviews from "../../components/ProductPage/Reviews";
import Restaurants from "../../components/Homepage/Restaurants";
import Map from "../../components/ProductPage/Map";
import MobileNav from "../../components/Layout/MobileNav";

function ProductPage() {
    return (
        <div className={styles.container}>
            <MobileNav />
            <Banner />
            <Menu />
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
