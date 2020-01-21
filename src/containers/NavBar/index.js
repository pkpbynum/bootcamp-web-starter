import React from 'react'
import {
  NavContainer, NavButton, LogoButton, Image, LogoText,
} from './styles'

const NavBar = () => (
  <NavContainer>
    <LogoButton>
      <Image src="./ClubHQ.png" alt="ClubHQ" />
    </LogoButton>
    <LogoButton>
      <LogoText>ClubHQ</LogoText>
    </LogoButton>
    <NavButton>
            Button
    </NavButton>
  </NavContainer>
)

export default NavBar
