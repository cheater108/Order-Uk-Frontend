import styles from "./Reviews.module.css";
import arrow_left from "../../assets/arrow-left.svg";
import arrow_right from "../../assets/arrow-right.svg";
import star_full from "../../assets/star-full.svg";
import clock from "../../assets/clock-3.svg";
import { useRef, useState } from "react";
import { getComments } from "../../api/comments";

function Reviews() {
    const [comments, setComments] = useState([]);
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({
                left: -20,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 20, behavior: "smooth" });
        }
    };

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
                    <div className={styles.arrow} onClick={() => scrollLeft()}>
                        <img src={arrow_left} alt="" />
                    </div>
                    <div className={styles.arrow} onClick={() => scrollRight()}>
                        <img src={arrow_right} alt="" />
                    </div>
                </div>
            </div>
            <div ref={scrollContainer} className={styles.reviews}>
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
            <img
                className={styles.sample}
                src="https://res.cloudinary.com/dxcgng2n6/image/upload/v1733143432/order-uk/review-sample_czwesb.png"
                alt=""
            />
        </div>
    );
}

export default Reviews;
