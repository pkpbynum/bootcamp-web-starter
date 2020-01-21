import React from 'react'
import { ResultCard, ClubText, StyledLink } from './styles'

const ShowClubs = ({ clubArray }) => {
  const stuff = clubArray.map(item => (
    <StyledLink to={`/Clubs/${item.id}`} key={item.id}>
      <ResultCard>
        <ClubText>{item.title}</ClubText>
      </ResultCard>
    </StyledLink>
  ))

  return stuff
}

export default ShowClubs
