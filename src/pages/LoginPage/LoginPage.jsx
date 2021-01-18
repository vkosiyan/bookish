import React, { useState, useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessge/ErrorMessage'
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';

export default function LoginPage(props){
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('')
    const [state, handleChange]       = useForm({
        email: '',
        pw: '',
    })
  
    const formRef = useRef();
    const history = useHistory();

    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    });

    return (
        <>
          <h1>Login</h1>
          <form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            
            try {
                await userService.login(state);
                // Route to wherever you want!
                props.handleSignUpOrLogin() // 
                history.push('/')
              } catch (err) {
                // Invalid user data (probably duplicate email)
                setError(err.message)
              }
          }}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                value={ state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="pw"
                type="password"
                placeholder="password"
                value={ state.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={invalidForm}
            >
              Login
            </button>
          </form>

          {error ? <ErrorMessage error={error} /> : null}
        </>
      );
}

