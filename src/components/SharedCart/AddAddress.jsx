import styles from "./AddAddress.module.css";
import location from "../../assets/location.svg";
import { useState } from "react";
import { postAddress } from "../../api/user";
import toast from "react-hot-toast";

function AddAddress({ setAdd, refreshAddress }) {
    const [address, setAddress] = useState({
        state: "",
        city: "",
        pin: "",
        phone: "",
        address: "",
    });

    function handleAdd() {
        postAddress(address)
            .then((data) => {
                toast.success(data.message);
                setAdd(false);
                refreshAddress();
            })
            .catch((err) => {
                toast.error("Unable to add address");
                setAdd(false);
            });
    }

    function handleChange(e) {
        setAddress({ ...address, [e.target.name]: e.target.value });
    }

    function hide(e) {
        if (e.target.className === styles.modal) setAdd(false);
    }
    return (
        <div className={styles.modal} onClick={hide}>
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
                <button onClick={handleAdd}>Save</button>
            </div>
        </div>
    );
}

export default AddAddress;
