import React from 'react';
import styles from './Typerhead.module.css';

const FRUIT_SUGGESTIONS = [
    'Apple',
    'Banana',
    'Blueberry',
    'Cherry',
    'Grape',
    'Kiwi',
    'Lemon',
    'Lime',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Raspberry',
    'Strawberry',
    'Watermelon',
    'Tomato',
    'Coconut',
    'Avocado',
    'Pomegranate',
    'Papaya',
    'Guava',
];

function Typerhead() {

    const [suggestions, setSuggestions] = React.useState([]);
    const [loading, setLoading ] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');


    const getSuggestions = myDebounce( async (userText) => {
        console.log('aryan in getSuggestions');
       const myPromise = new Promise((resolve, reject) => {
         setTimeout(()=>{
            const suggestions  = FRUIT_SUGGESTIONS.filter(
                suggestion => suggestion.toLowerCase().includes(userText.toLowerCase())
            );
            if(suggestions.length > 0) {
                resolve(suggestions);
            }else {
                reject('No suggestions found');
            }  
         },5000);     
       });
       return myPromise;
    }, 2000);


    function myDebounce(fn, delay) {
        let timer;
        return function(...args) {
            if(timer) clearTimeout(timer);

            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        }
    }


    const inputChangeHandler =async (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
        setLoading(true);
        await getSuggestions(e.target.value)
          .then(suggestions => {
             setLoading(false);
             setSuggestions(suggestions)
          })
          .catch((error) => {
              console.log(error);
              setLoading(false);
              setSuggestions([]);
          });
    }

    const suggestionClickHandler = (e) => {
        // console.log(e.target.innerText);
        setSuggestions([]);
        setInputValue(e.target.innerText);
    }

    return (
       <>
        <div className={styles.container}>
            <input
              className={styles.input} 
              type="text"
              onChange={(e) => {inputChangeHandler(e);}}
              value={inputValue}  >
            </input>
            <img
              className={styles.image}
              src='/magnifying-glass.png'
              alt='search'
              width={100}
              height={95}
            />
        </div>
        {suggestions?.length > 0 && <div className={styles.suggestions}>
            {suggestions.map((suggestion) => (
                <div key={suggestion} 
                     className={styles.suggestion__item}
                     onClick={(e) => {suggestionClickHandler(e);}} >
                    {suggestion}
                </div>
            ))}
        </div>}
        {loading && <div className={styles.loading}>Loading...</div>}
       </> 
    );
}

export default Typerhead;