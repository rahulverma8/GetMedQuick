import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postDataToAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';

function SignUp() {

    const redirect = useNavigate();
    const [hospital, setHospital] = useState({ name: '', email: '', password: '' });
    const [signedUpMes, setsignedUpMes] = useState('');
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setHospital((hospital) => ({ ...hospital, [name]: value }));
    };

    const signupResHandler = (res) => {
        if (res.isDuplicateHospital)
            setsignedUpMes('Hospital already exist in database');
        else if (res.isEmailSent)
            redirect('/signup/otp', { state: { ...hospital } })
        else if (!res.isEmailSent)
            setsignedUpMes('please enter correct email id')
        else
            setsignedUpMes('something went wrong try again');
    }


    const clickHandler = async (e) => {
        e.preventDefault();

        postDataToAPI(`${RootUrl}/signup`,hospital)
            .then((response) => {
                console.log(response);
                signupResHandler(response)
            }).catch((err) =>
                setsignedUpMes('something went wrong try again'))
    }

    return ( 
        <form className='auth-form'>
            <label htmlFor="name" >Name : <input type='text' name='name' id='name' value={hospital.name} onChange={changeHandler} /></label><br />
            <label htmlFor="email" >Email : <input type="email" name='email' id='email' value={hospital.email} onChange={changeHandler}/>  </label><br />
            <label htmlFor="password" > Password : <input type='password' name='password' id='password' value={hospital.password}  onChange={changeHandler}/> </label><br />
            <button type='submit' onClick={clickHandler}>signUp</button>
            <p>{signedUpMes}</p>
        </form>
   
    );
}

export default SignUp;
