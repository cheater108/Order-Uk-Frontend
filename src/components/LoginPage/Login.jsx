import styles from "./Login.module.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "../../api/user";
import toast from "react-hot-toast";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault();

        setLoading(true);
        postLogin(user)
            .then((data) => {
                toast.success(data.message);
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.name);
                localStorage.setItem("email", data.email);
                setLoading(false);
                navigate("/");
            })
            .catch(({ response }) => {
                toast.error(response?.data?.error || "Something went wrong");
                setLoading(false);
            });
    }

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleLogin}
                className={styles.form}
                action="#"
                method="post"
            >
                <img src={logo} alt="logo" />
                <h1>Welcome Back 👋</h1>
                <p>
                    Today is a new day. It's your day. You shape it. Sign in to
                    start ordering.
                </p>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Example@email.com"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 8 characters"
                    onChange={handleChange}
                    required
                />
                {loading ? (
                    <button disabled>Signin...</button>
                ) : (
                    <button type="submit">Sign in</button>
                )}
                <p>
                    Don't you have an account?{" "}
                    <span onClick={() => navigate("/user/register")}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
