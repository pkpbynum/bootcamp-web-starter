import React, { useState } from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  LOGIN,
} from './graphql.js'
import { LoginInput, LoginContainer, LoginButton } from './styles'

const Login = ({ tokenState, setTokenState }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  console.log(tokenState, setTokenState)

  const [log, { loading: logLoading, error: logError }] = useMutation(
    LOGIN,
    {
      variables: { email, password },
      onCompleted: ({ login: { token } }) => {
        localStorage.setItem('token', token)
        history.push('/Browse')
        return setTokenState(1)
        // return window.location.reload()
      },
    },
  )

  if (logLoading) return 'Loading!'
  if (logError) return `Error: ${logError}`

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
