import React from "react";
import OtpInput from "./OtpInput";


const PhoneOtpForm = () => {

    const [phoneNumberEntered,setPhoneNumberEntered] = React.useState(false);
    const [phoneNumber,setPhoneNumber] = React.useState("");

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        // if(phoneNumber.length === 10){
           // console.log("Phone number is valid");
           setPhoneNumberEntered(true);
        // }    
    }

    const onOtpSubmit = (otp) => {
        console.log('submitted otp -->',otp);
    }

    return phoneNumberEntered ?(
        <div>
            <h3>{`Entered OTP sent to ${phoneNumber}`}</h3>
            <OtpInput length={4} onSubmit={onOtpSubmit}/>
        </div>
    )
     : (
        <form onSubmit={handlePhoneNumberSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            />
           <button type="submit">Submit</button> 
        </form>
    );
}

export default PhoneOtpForm;