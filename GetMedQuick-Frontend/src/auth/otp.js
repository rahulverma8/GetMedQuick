import React from "react";
import otpimg from "../Assets/otp-img.png";
import "../Styles/otp.css";
import { postDataToAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';
import { useLocation, useNavigate } from 'react-router';

const Otp = () => {

const urlData = useLocation();
const redirect = useNavigate()
const [localOtp, setLocalOtp] = React.useState('');
const [authMes, setAuthMes] = React.useState('');

function changeHandler(e) {
  setLocalOtp(e.target.value);
}

function authResHandler(res) {
  if (res.isHospitalSignedUp) {
    alert('hospital succesfully signed up');
    redirect("/logIn");
  }
  else if (res.isOtpWorng)
    setAuthMes('Enter correct otp and password');


  else
    setAuthMes('something went wrong try again');
  }



const VerifySignup  = (e) => {
  e.preventDefault();
  postDataToAPI(`${RootUrl}/signup/authotp`, { ...urlData.state, otp: parseInt(localOtp) })
    .then((response) => authResHandler(response)).catch((err) => {
      console.log(err);
      setAuthMes('something went wrong try again')
    }
    );
}




  return (
  <section className="otp-sec">
  <div className="otp-cont">
      <div className="ver">Verify Account</div>
        <div>
        <img className="otp-img" src={otpimg} alt="otp" />
    </div>
    <p className="first-para"> 
    Email Verification has been successfully done
    </p>
    <p>Ente the OTP sent o your Email address</p>
    <input className="int-otp"  name='otp' type='text' value={localOtp} onChange={changeHandler} />
    <p>
    If you don't receive a code{" "}
    <a className="resnd-link" href="#">
            Resend
          </a>
        </p>
        <button className="ver-btn" onClick={VerifySignup} >Verify</button>
      </div>
  </section>
  );
}
export default Otp;
 
