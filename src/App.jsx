import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import {
    Layout,
    Homepage,
    ProductPage,
    ProfilePage,
    LoginPage,
    CheckoutPage,
    PaymentPage,
} from "./pages";
import Login from "./components/LoginPage/Login";
import Register from "./components/LoginPage/Register";
import { isLoggedIn } from "../utils/helpers";
import AppProvider, { AppContext } from "./context/AppProvider";
import { useContext } from "react";
import OrderSuccess from "./components/PaymentPage/OrderSuccess";
import SharedCart from "./pages/SharedCart/SharedCart";

function NotLoggedIn({ children }) {
    if (isLoggedIn()) {
        return <Navigate to={"/"} />;
    }
    return children;
}

function IsLoggedIn({ children }) {
    if (isLoggedIn()) {
        return children;
    }
    return <Navigate to={"/"} />;
}

function CartNotEmpty({ children }) {
    const { order } = useContext(AppContext);
    if (order.length <= 0) {
        return <Navigate to={"/restaurant"} />;
    }
    return children;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <AppProvider>
                            <Layout />
                        </AppProvider>
                    }
                >
                    <Route index element={<Homepage />} />
                    <Route path={"restaurant"} element={<ProductPage />} />
                    <Route
                        path={"profile"}
                        element={
                            <IsLoggedIn>
                                <ProfilePage />
                            </IsLoggedIn>
                        }
                    />
                    <Route
                        path={"checkout"}
                        element={
                            <CartNotEmpty>
                                <CheckoutPage />
                            </CartNotEmpty>
                        }
                    />
                    <Route
                        path={"payment"}
                        element={
                            <IsLoggedIn>
                                <CartNotEmpty>
                                    <PaymentPage />
                                </CartNotEmpty>
                            </IsLoggedIn>
                        }
                    />
                    <Route
                        path={"payment/success"}
                        element={<OrderSuccess />}
                    />
                    <Route path={"shared/:id"} element={<SharedCart />} />
                </Route>
                <Route
                    path="/user"
                    element={
                        <NotLoggedIn>
                            <LoginPage />
                        </NotLoggedIn>
                    }
                >
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
