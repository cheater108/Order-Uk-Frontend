import { createContext, useState } from "react";

export const AppContext = createContext();

function getCartFromLocal() {
    const cart = localStorage.getItem("cart");
    if (!cart) return [];
    return JSON.parse(cart);
}

function updateCartLocal(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function AppProvider({ children }) {
    const [order, setOrder] = useState(() => getCartFromLocal());

    function addItem(item_add) {
        setOrder((prev_order) => {
            let added = false;
            const new_order = prev_order.map((item) => {
                if (item._id.toString() === item_add._id.toString()) {
                    added = true;
                    item.count += 1;
                }
                return item;
            });
            if (!added) {
                updateCartLocal([...prev_order, { ...item_add, count: 1 }]);
                return [...prev_order, { ...item_add, count: 1 }];
            }
            updateCartLocal(new_order);
            return new_order;
        });
    }

    function removeItem(item_remove) {
        setOrder((prev_order) => {
            const new_order = prev_order.map((item) => {
                if (item._id.toString() === item_remove._id.toString()) {
                    if (item.count > 1) {
                        item.count -= 1;
                    } else {
                        return null;
                    }
                }
                return item;
            });
            const new_cart = new_order.filter((item) => item !== null);
            updateCartLocal(new_cart);
            return new_cart;
        });
    }

    function updateCart(cart) {
        setOrder(cart);
        updateCartLocal(cart);
    }

    return (
        <AppContext.Provider value={{ order, addItem, removeItem, updateCart }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
