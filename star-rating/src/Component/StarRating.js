import styles from './StarRating.module.css';
import { useState } from 'react';

const StarRating = ({maximumNoOfStars = 5}) => {
    const [rating, setRating] = useState(-1);
    const [ hover, setHover] = useState(-1);
    return (
        <div className={styles.container}>
            <div className={styles.container__inner}>
             {
               [...Array(maximumNoOfStars)].map((_, index) => (
                   <span key={index} 
                     className={`${styles.star} ${(index <= rating)||(index <= hover) ? styles.on : styles.off}`}
                     onClick={() => setRating(index)}
                     onMouseOver={()=> setHover(index)}
                     onMouseLeave={()=> setHover(rating)}>
                    &#8902;
                    </span>
                ))
             }
            </div>
            <button onClick={()=>{setRating(-1);setHover(-1)}}><b>Reset Rating</b></button>
        </div>
    );
}

export default StarRating;