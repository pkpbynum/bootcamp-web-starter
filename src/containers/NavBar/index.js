import React, { useState } from 'react'
import {
  NavContainer, NavButton, LogoButton, Image, LogoText, LogoLink, ButtonLink,
} from './styles'


const NavBar = ({ tokenState, setTokenState }) => {
  console.log(tokenState)
  const Logout = () => {
    if (!localStorage.getItem('token')) {
      // setTokenState(0)
      // window.location.reload()
      return (
        <ButtonLink to="/Login">
          <NavButton styles={{ backgroundColor: '#c08a1d' }}>
            Login
          </NavButton>
        </ButtonLink>
      )
    }

    setTokenState(1)
    // window.location.reload()
    return (
      <ButtonLink to="/">
        <NavButton
          styles={{ backgroundColor: '#c08a1d' }}
          onClick={() => {
            localStorage.removeItem('token')
            return setTokenState(0)
          }}
        >
              Logout
        </NavButton>
      </ButtonLink>
    )
  }


  return (
    <NavContainer>
      <LogoLink to="/">
        <LogoButton>
          <Image src="./ClubHQ.png" alt="ClubHQ" />
        </LogoButton>
        <LogoButton>
          <LogoText>ClubHQ</LogoText>
        </LogoButton>
      </LogoLink>
      <ButtonLink to="/Browse">
        <NavButton>
            Browse All Clubs
        </NavButton>
      </ButtonLink>
      <ButtonLink to="/Browse">
        <NavButton>
            Top Clubs
        </NavButton>
      </ButtonLink>
      <ButtonLink to="/Donate">
        <NavButton styles={{ backgroundColor: '#c08a1d' }}>
            Donate
        </NavButton>
      </ButtonLink>
      <Logout />
    </NavContainer>
  )
}

export default NavBar
