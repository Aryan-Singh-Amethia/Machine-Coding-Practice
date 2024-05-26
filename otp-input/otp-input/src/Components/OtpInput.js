import React, { useEffect, useRef, useState } from 'react';
import styles from './OtpInput.module.css';

const OtpInput = ({length = 4,onOtpSubmit = ()=>{}}) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        if( inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[]);

    const handleOtpChange = (e,index) => {
       const value = e.target.value;
       if( isNaN(value)) return;
       const newOtp = [...otp];
       newOtp[index] = value.substr(value.length-1);
       setOtp(newOtp);

       const combinedOtp = newOtp.join('');
       if(combinedOtp.length === length) onOtpSubmit(combinedOtp);

       //Move to next after current input field is filled
       if(value && index < length - 1 && inputRefs.current[index+1]){
           inputRefs.current[index+1].focus();
       }


    };

    const handleClick = (e,index) => {
      inputRefs.current[index].setSelectionRange(1,1);// place cursor at the end of input field
    }

    const handleKeyDown = (e,index) => {
      if( e.key ==='Backspace' &&
          otp[index] === '' &&
          index > 0 &&
          inputRefs.current[index-1]){
            // Moving focus to previous input field on Backspace
              inputRefs.current[index-1].focus();
          }
    }
    console.log('aryan ',inputRefs);
    return (
        <div className={styles.otp__container}>
             {otp.map((otpChar,index) => (
                <input
                    key={index}
                    ref={(input) => { inputRefs.current[index]=input} } // This is called a callback ref. Here the inout is the DOM element in question.
                    type="text"
                    value={otpChar}
                    onChange={ (e) => handleOtpChange(e,index)}
                    onClick={(e) => {handleClick(e,index)}}
                    onKeyDown={(e) => {handleKeyDown(e,index)}}
                    className={styles.otpInput}
                />))}
        </div>
    );
};

export default OtpInput;