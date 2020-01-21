import React from 'react'
import {
  JumboContainer, JumboImage, HomeText, TextContainer, LoginButton,
} from './styles'

const Home = () => (
  <JumboContainer>
    <JumboImage src="https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2018/05/31/234430_1331299.jpg.1500x1000_q95_crop-smart_upscale.jpg" />
    <TextContainer>
      <HomeText>Welcome to ClubHQ!</HomeText>
      <HomeText style={{ fontSize: '3vh' }}>Connect with over 12+ student organizations on Harvard campus!</HomeText>
      <LoginButton style={{ backgroundColor: '#c08a1d' }}>Login</LoginButton>
      <LoginButton style={{ backgroundColor: '#4ca349' }}>Sign Up</LoginButton>
    </TextContainer>

  </JumboContainer>
)


export default Home
