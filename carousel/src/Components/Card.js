import React from 'react';
import styles from './Card.module.css';


const Card = (props) => {
    const {key,image} = props;
    return (
        <div key={key} className={styles.card__item}>
            <img src={image} alt={key}/>
        </div>
    );
};


export default Card;
