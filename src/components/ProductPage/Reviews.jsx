import styles from "./Reviews.module.css";
import arrow_left from "../../assets/arrow-left.svg";
import arrow_right from "../../assets/arrow-right.svg";
import customer from "../../assets/cloudinary/customer-1.png";
import star_full from "../../assets/star-full.svg";
import clock from "../../assets/clock-3.svg";
import sample_review from "../../assets/cloudinary/review-sample.png";
import { useState } from "react";
import { getComments } from "../../api/comments";

function Reviews() {
    const [comments, setComments] = useState([]);

    useState(() => {
        getComments()
            .then((data) => setComments(data.comments))
            .catch((err) => console.log("error fetching comments"));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>Customer Reviews</h1>
                <div className={styles.arrows}>
                    <div className={styles.arrow}>
                        <img src={arrow_left} alt="" />
                    </div>
                    <div className={styles.arrow}>
                        <img src={arrow_right} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.reviews}>
                {comments.map((comment) => (
                    <div key={comment._id} className={styles.review_card}>
                        <div className={styles.review_top}>
                            <div className={styles.review_left}>
                                <div className={styles.img}>
                                    <img src={comment.img} alt="customer" />
                                </div>
                                <div className={styles.cust_info}>
                                    <p>{comment.name}</p>
                                    <p>South London</p>
                                </div>
                            </div>
                            <div className={styles.review_right}>
                                <div className={styles.stars}>
                                    <img src={star_full} alt="" />
                                    <img src={star_full} alt="" />
                                    <img src={star_full} alt="" />
                                    <img src={star_full} alt="" />
                                    <img src={star_full} alt="" />
                                </div>
                                <p className={styles.time}>
                                    <img src={clock} alt="" />
                                    {comment.date}
                                </p>
                            </div>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
            <img className={styles.sample} src={sample_review} alt="" />
        </div>
    );
}

export default Reviews;
