import React from 'react'
import "./form-input.styles.css"

const FormInput = ({ handleChange, label, signUpForm, ...otherProps}) => (
    <div className='group'>
        <input className={`${ signUpForm ? "sign-up-form" : '' } form-input`} onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
                {label}
            </label>) 
            : null
        }
    </div>
)

export default FormInput