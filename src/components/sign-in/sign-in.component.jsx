import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.css'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { useState } from 'react'


const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: "", password: ""});

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials({ email: "", password: ""});
        }  catch(error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value})
    }

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput name="email" type="email" label="Email" handleChange={handleChange} value={email} required />
          <FormInput name="password" type="password" label="Password" handleChange={handleChange} value={password} />

          {/* <input type="submit" value="submit form" /> */}
          <div className='sign-in-buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton id="sign-in-google" onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In with google{''}</CustomButton>
          </div>
        </form>
      </div>
    );
  }

export default SignIn