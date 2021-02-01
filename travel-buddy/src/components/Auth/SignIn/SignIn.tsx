import React, { useState } from 'react'

const SignIn: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const credentials = { email: email, password: password}
        console.log(credentials)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login form</h1>
            <label>
                Email:
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignIn;