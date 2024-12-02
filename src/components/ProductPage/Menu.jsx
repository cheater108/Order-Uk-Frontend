import menuData from "../../data/menuData";
import styles from "./Menu.module.css";
import first_order from "../../assets/cloudinary/first-order.png";
import add from "../../assets/add.svg";
import burger from "../../assets/cloudinary/burger-fries.png";
import Cart from "./Cart";
import { useContext, useEffect, useState } from "react";
import { getMenu } from "../../api/restaurant";
import { AppContext } from "../../context/AppProvider";

function Menu() {
    const { order, addItem } = useContext(AppContext);
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
            <div className={styles.ribbon}>
                <div className={styles.inner}>
                    {menuData.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
            </div>
            <div className={styles.menu_container}>
                <div className={styles.left}>
                    <div className={styles.offers_container}>
                        <div className={styles.offer_card}>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/first-order_ewhlgr.png"
                                }
                                alt="offer"
                            />
                            <div className={styles.offer_footer}>
                                <p>McDonald’s East London</p>
                                <h1>First Order Discount</h1>
                            </div>
                            <div className={styles.offer_percent}>-20%</div>
                            <div className={styles.add}>
                                <img src={add} alt="" />
                            </div>
                        </div>
                        <div className={styles.offer_card}>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543220/order-uk/vegan-discount_lyt4gb.png"
                                }
                                alt="offer"
                            />
                            <div className={styles.offer_footer}>
                                <p>McDonald’s East London</p>
                                <h1>Vegan Discount</h1>
                            </div>
                            <div className={styles.offer_percent}>-20%</div>
                            <div className={styles.add}>
                                <img src={add} alt="" />
                            </div>
                        </div>
                        <div className={styles.offer_card}>
                            <img
                                src={
                                    "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/free-ice_pfx981.png"
                                }
                                alt="offer"
                            />
                            <div className={styles.offer_footer}>
                                <p>McDonald’s East London</p>
                                <h1>Free ice Cream Offer</h1>
                            </div>
                            <div className={styles.offer_percent}>-100%</div>
                            <div className={styles.add}>
                                <img src={add} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.food}>
                        {menu.burger.length > 0 && (
                            <h1 className={styles.food_type}>Burgers</h1>
                        )}
                        <div className={styles.food_cards}>
                            {menu.burger.map((item) => (
                                <div key={item._id} className={styles.card}>
                                    <div className={styles.card_left}>
                                        <p className={styles.food_name}>
                                            {item.name}
                                        </p>
                                        <p>{item.description}</p>
                                        <p className={styles.food_price}>
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.card_right}
                                        onClick={() => addItem(item)}
                                    >
                                        <img
                                            className={styles.food_img}
                                            src={item.img}
                                            alt="item"
                                        />
                                        <div className={styles.card_add}>
                                            <img
                                                src={add}
                                                alt=""
                                                width={"30px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {menu.fries.length > 0 && (
                            <h1 className={styles.food_type}>Fries</h1>
                        )}
                        <div className={styles.food_cards}>
                            {menu.fries.map((item) => (
                                <div key={item._id} className={styles.card}>
                                    <div className={styles.card_left}>
                                        <p className={styles.food_name}>
                                            {item.name}
                                        </p>
                                        <p>{item.description}</p>
                                        <p className={styles.food_price}>
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.card_right}
                                        onClick={() => addItem(item)}
                                    >
                                        <img
                                            className={styles.food_img}
                                            src={item.img}
                                            alt="item"
                                        />
                                        <div className={styles.card_add}>
                                            <img
                                                src={add}
                                                alt=""
                                                width={"30px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {menu.cold_drinks.length > 0 && (
                            <h1 className={styles.food_type}>Cold Drinks</h1>
                        )}
                        <div className={styles.food_cards}>
                            {menu.cold_drinks.map((item) => (
                                <div key={item._id} className={styles.card}>
                                    <div className={styles.card_left}>
                                        <p className={styles.food_name}>
                                            {item.name}
                                        </p>
                                        <p>{item.description}</p>
                                        <p className={styles.food_price}>
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                    <div
                                        className={styles.card_right}
                                        onClick={() => addItem(item)}
                                    >
                                        <img
                                            className={styles.food_img}
                                            src={item.img}
                                            alt="item"
                                        />
                                        <div className={styles.card_add}>
                                            <img
                                                src={add}
                                                alt=""
                                                width={"30px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {order.length > 0 && (
                    <div className={styles.right}>
                        <Cart />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Menu;
