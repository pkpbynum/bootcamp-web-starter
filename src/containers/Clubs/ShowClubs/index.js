import React from 'react'
import { ResultCard, ClubText, StyledLink } from './styles'

const ShowClubs = ({ clubArray }) => clubArray.allClubs.map(({ id, name }) => (
  <StyledLink to={`/Clubs/${id}`} key={id}>
    <ResultCard>
      <ClubText>{name}</ClubText>
    </ResultCard>
  </StyledLink>
))

export default ShowClubs
