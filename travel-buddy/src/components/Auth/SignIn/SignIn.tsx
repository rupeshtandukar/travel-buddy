import React, { Fragment, useState } from 'react'
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
// import { useHistory } from 'react-router-dom'

interface IUserProps {
    email: string;
    password: string;
    error: string;
}


export const SignIn: React.FC = () => {
    //import firebase
    const firebase = useFirebaseApp();  //firebase hook
    
    // User state
    const [user, setUser] = useState<IUserProps>({
        email: '',
        password: '',
        error: ''
    })

    // onChange funciton
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value,
            error: '',
        })
    }

    //Submit function ( Create Account )
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                console.log('Loggedin')
            })
            .catch(error => {
                console.log(error);
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    return (
        <Fragment>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
                <button type="submit">Log In</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
        </Fragment>

    );
}
