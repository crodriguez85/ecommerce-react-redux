import React from 'react'
import './sign.style.scss';
import Signin from '../../components/signin/SignIn';

const SignIn = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            Sign In
            <Signin/>

        </div>
     );
}
 
export default SignIn;