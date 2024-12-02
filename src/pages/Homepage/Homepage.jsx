import Adverts from "../../components/Homepage/Adverts";
import Hero from "../../components/Homepage/Hero";
import Offers from "../../components/Homepage/Offers";
import Restraunts from "../../components/Homepage/Restaurants";
import styles from "./Homepage.module.css";
import FAQ from "../../components/Homepage/FAQ";
import Stats from "../../components/Homepage/Stats";
import MobileNav from "../../components/Layout/MobileNav";

function Homepage() {
    return (
        <div className={styles.container}>
            <MobileNav />
            <Hero />
            <Offers />
            <Restraunts heading={"Popular"} />
            <Adverts />
            <FAQ />
            <Stats />
        </div>
    );
}

export default Homepage;
