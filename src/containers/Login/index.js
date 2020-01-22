import React, { useState } from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import {
  LOGIN
} from './graphql.js'
import { LoginInput, LoginContainer, LoginButton } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [log, { loading: logLoading, error: logError }] = useMutation(
    LOGIN,
    {
      variables: { email, password },
      onCompleted: ({ login: { token } }) => localStorage.setItem('token', token),
    },
  )

  if(logLoading)  return 'Loading!'
  if(logError) return `Error: ${logError}`

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
      <LoginButton onClick={log}>Log In</LoginButton>
    </LoginContainer>
  )
}

export default Login
