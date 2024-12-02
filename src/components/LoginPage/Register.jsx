import styles from "./Login.module.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateRegister } from "../../../utils/validators";
import toast from "react-hot-toast";
import { postRegister } from "../../api/user";

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        number: "",
        name: "",
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { valid, message, error } = validateRegister(user);
        if (!valid) {
            if (error.email) toast.error(message.email);
            if (error.password) toast.error(message.password);
            if (error.name) toast.error(message.name);
            if (error.number) toast.error(message.number);
            return;
        }

        postRegister(user)
            .then((data) => {
                toast.success(data.message);
                navigate("/user");
            })
            .catch(({ response }) =>
                toast.error(response?.data?.error || "Something went wrong")
            );
    }

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
                action="#"
                method="post"
            >
                <img src={logo} alt="logo" />
                <h1>Welcome 👋</h1>
                <p>
                    Today is a new day. It's your day. You shape it. Sign in to
                    start ordering.
                </p>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="eg. John A"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="number">Number</label>
                <input
                    id="number"
                    name="number"
                    type="text"
                    placeholder="Enter your 10 digit mobile number"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Example@email.com"
                    onChange={handleChange}
                    required
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
                <button>Continue</button>
                <p>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/user")}>Sign in</span>
                </p>
            </form>
        </div>
    );
}

export default Register;
