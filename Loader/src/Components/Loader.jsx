import { useEffect, useState } from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    const [ loaderState, setLoaderState ] = useState(0);
    
    useEffect(()=>{
      setInterval(()=>{
        setLoaderState(current => { 
            if(current >= 100) 
             return current;
            else 
             return current+1;
               });
      },100);
    },[]);

    return (
        <div className={styles["loader__container"]}>
            <h1>MY LOADER COMPONENT</h1>
            <div className={styles["loader__wrapper"]}>
                <div className={styles["loader__outer"]}>
                    <div
                      className={styles["loader__inner"]}
                      style={{
                        width:`${loaderState}%`,
                        height:'100%'
                      }}
                    >
                    </div>      
                    <span className={styles["loader__text"]}
                          style={{
                            color: loaderState<=50 ? 'black' :'white'
                          }} >
                        {loaderState}%
                    </span>
                </div>
            </div>
        </div> 
    );
}

export default Loader;