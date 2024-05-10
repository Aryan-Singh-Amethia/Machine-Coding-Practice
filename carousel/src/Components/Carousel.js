import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import Card from './Card';


const Carousel = () => {

    const [carouselData, setCarouselData] = useState(null);
    const [carouselState,setCarouselState] = useState(0);
   
    useEffect(() => {
       (async function (){
          const data = await fetch('https://picsum.photos/v2/list')
                            .then(res => res.json())
                            .catch(err => console.log('error while calling API',err));
          setCarouselData(data);  
          setCarouselState(0);               
       })(); 
    }, []); 
    
    const onScrollLeft = () => {
        const scrollContainer = document.querySelector(`.${styles.carousel__box}`);
        if(carouselState > 0) {
           setCarouselState(carouselState => carouselState - 1);
           scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollContainer.clientWidth;
        }
      }

    const onScrollRight = () => {
        const scrollContainer = document.querySelector(`.${styles.carousel__box}`);
        if(carouselState < carouselData?.length - 1){
            setCarouselState(carouselState => carouselState+1);
            scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollContainer.clientWidth;
        }
    }  

    const onDotClick = (index) => {
        const scrollContainer = document.querySelector(`.${styles.carousel__box}`);
        scrollContainer.scrollLeft = scrollContainer.scrollLeft + (index - carouselState)*scrollContainer.clientWidth;
        setCarouselState(index);
    }

    return (
            <div className={styles.carousel__container}>
                 <button className={`${styles.carousel__btn} ${styles.carousel__btn_left}`} onClick={onScrollLeft}>&lt;</button>
                 <button className={`${styles.carousel__btn} ${styles.carousel__btn_right}`} onClick={onScrollRight}>&gt;</button>
            <div className={styles.carousel__box}>
                {carouselData?.map((curr,index)=> <Card key={`${curr.author}${index}`} image={curr.download_url}/>)}
            </div>
            <div className={styles.carousel__pagination_container}>
                {carouselData?.map((_,index) => <div className={`${styles.pagination__dot} ${index === carouselState? styles.pagination__dot_active:''}`} onClick={()=>onDotClick(index)}/>)}
            </div>
            </div>
    );
};
            
export default Carousel;
