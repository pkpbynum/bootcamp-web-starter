import React, { useState } from 'react'
import { LoginInput, LoginContainer, LoginButton } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <LoginContainer>
      <p style={{
        fontFamily: 'Arial', fontWeight: 'bold', fontSize: '4vh', margin: '0px',
      }}
      >
Log In:
      </p>
      <LoginInput name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <LoginInput name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <LoginButton>Log In</LoginButton>
    </LoginContainer>
  )
}

export default Login
