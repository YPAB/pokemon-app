import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const navigate =  useNavigate();
  const { dispatch } = useContext( AuthContext );

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleLogin =() => {

    const action = {
      type: types.login,
      payload: { name: email }

      }

      dispatch(action);
      navigate('/', {
        replace:true

      });
    }

  function onEmailChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
    //console.log(event.target.value);
  }


  return (
    <div className='container bg-secondary text-sm-center'>
       <div className='card text-white bg-primary mt-5'>
        <div className='card-body'>
          <div className='card-group justify-content-center'>
              <div className="form-group">
                <h1>Pokemon Login</h1>
                  <input name="email" id="email" type="email" placeholder="Email" className="form-control mt-3" value={email} onChange={onEmailChange}/>
              
                  <input name="password" id="password" placeholder="Password" type="password" className="form-control mt-3" value={password} onChange={onPasswordChange} />
                <button
                  className="btn btn-dark m-2"
                  onClick={ handleLogin }
                >
                  Iniciar Sesión
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
     
  )
}
