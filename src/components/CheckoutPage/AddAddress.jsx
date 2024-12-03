import styles from "./AddAddress.module.css";
import location from "../../assets/location.svg";
import { useState } from "react";
import { postAddress } from "../../api/user";
import toast from "react-hot-toast";
import { validateAddress } from "../../../utils/validators";

function AddAddress({ setAdd, refreshAddress }) {
    const [address, setAddress] = useState({
        state: "",
        city: "",
        pin: "",
        phone: "",
        address: "",
    });
    const [loading, setLoading] = useState(false);

    function handleAdd() {
        const { valid, error, message } = validateAddress(address);

        if (!valid) {
            for (const e in error) {
                if (error[e]) toast.error(message[e]);
            }
            return;
        }

        setLoading(true);
        postAddress(address)
            .then((data) => {
                toast.success(data.message);
                setAdd(false);
                setLoading(false);
                refreshAddress();
            })
            .catch(({ response }) => {
                console.log(response);
                toast.error(response?.data?.error || "Something went wrong");
                setLoading(false);
                setAdd(false);
            });
    }

    function handleChange(e) {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }

    function hideModal(e) {
        if (e.target.className === styles.modal) setAdd(false);
    }
    return (
        <div className={styles.modal} onClick={hideModal}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <img src={location} alt="" />
                    <p>Add Address</p>
                </div>
                <div className={styles.middle}>
                    <input
                        name="state"
                        type="text"
                        placeholder="State"
                        onChange={handleChange}
                        value={address.state}
                    />
                    <input
                        name="city"
                        type="text"
                        placeholder="City/District"
                        onChange={handleChange}
                        value={address.city}
                    />
                    <input
                        name="pin"
                        type="text"
                        placeholder="Pin Code"
                        onChange={handleChange}
                        value={address.pin}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={address.phone}
                    />
                </div>
                <div>
                    <textarea
                        name="address"
                        id="address"
                        rows={5}
                        placeholder="Enter full address"
                        onChange={handleChange}
                        value={address.address}
                    ></textarea>
                </div>
                {loading ? (
                    <button>Saving...</button>
                ) : (
                    <button onClick={handleAdd}>Save</button>
                )}
            </div>
        </div>
    );
}

export default AddAddress;
