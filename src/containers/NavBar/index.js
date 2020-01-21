import React from 'react'
import {
  NavContainer, NavButton, LogoButton, Image, LogoText, LogoLink, ButtonLink,
} from './styles'

const NavBar = () => (
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
  </NavContainer>
)

export default NavBar