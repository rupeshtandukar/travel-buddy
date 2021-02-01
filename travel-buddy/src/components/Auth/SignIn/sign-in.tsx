import React, { useReducer } from 'react';
import auth from '../SignIn/auth_data.json'

type State = {
    email: string
    password: string
    isError: boolean
    helperText: string
}

const initialState: State = {
    email: '',
    password: '',
    isError: false,
    helperText: ''
}

type Action = { type: 'setUserEmail', payload: string }
    | { type: 'setUserPassword', payload: string }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUserEmail':
            return {
                ...state,
                email: action.payload
            };
        case 'setUserPassword':
            return {
                ...state,
                password: action.payload
            }
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            }
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            }
    }
}

const SignIn: React.FC = () => {

    const [state, dispatch] = useReducer(reducer,initialState)

    const handleLogin = () => {
        if (state.email === auth.email && state.password === auth.password) {
            dispatch({
                type: 'loginSuccess',
                payload: 'Login in successfully.'
            })
        } else {
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect Email & Password.'
            })
        }

    }

    const handleUserEmailChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setUserEmail',
                payload: event.target.value
            });
        };

    const handleUserPasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => {
            dispatch({
                type: 'setUserPassword',
                payload: event.target.value
            });
        };

    return (
        <form>
            { state.isError === true &&
                <span style={{color:'red'}}>{state.helperText}</span>
            }
            <label>
                Email:
               <input type="email" name="email" onChange={handleUserEmailChange} />
            </label>
            <br />
            <label>
                Password:
               <input type="password" name="password" onChange={handleUserPasswordChange} />
            </label>
            <button type="submit" onClick={handleLogin}>Submit</button>
        </form>
    )
}

export default SignIn;