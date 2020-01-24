import React from 'react'
import {
  ResultCard, ClubText, StyledLink, RatingText,
} from './styles'

const ShowClubs = ({ clubArray }) => clubArray.map(({ id, name, avgRating }) => (
  <StyledLink to={`/Clubs/${id}`} key={id}>
    <ResultCard>
      <ClubText>
        {name}
        {' '}
      </ClubText>
      <RatingText>{avgRating}</RatingText>
    </ResultCard>
  </StyledLink>
))

export default ShowClubs
