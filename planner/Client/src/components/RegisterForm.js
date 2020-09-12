import React from 'react';
import useForm from './useForm';

const RegisterForm = () => {
    const { values, handleChange, handleSubmit } = useForm(register);
    

    function register(){
        alert(`Thanks for registering! Check your email ${values.email} for confirmation`);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={values.email} 
                    required={true} 
                />
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={values.password} 
                    required={true} 
                />
            </label>
            <button type="submit">Register</button>
        </form>
        </div>
    );
};

export default RegisterForm;
