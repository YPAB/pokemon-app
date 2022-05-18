import React from 'react'
import { useNavigate } from 'react-router';

export const LoginScreen = () => {
  const navigate =  useNavigate();

  const handleLogin =() => {
    navigate('/pokemon', {
      replace:true

    });

  }

  return (
    <div className="container mt-5">
        <h1>
            Login Screen
        </h1>

        <button
        className="btn btn-primary"
        onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  )
}
