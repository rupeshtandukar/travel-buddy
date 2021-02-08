import React from 'react';
import './Register.css';

const Register: React.FC = () => {
    return(<form className='registerForm'>
        <h1>Rregister</h1>
        <label>Username</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>
        <button type='submit'>Register</button>
    </form>);
    
}

export default Register
