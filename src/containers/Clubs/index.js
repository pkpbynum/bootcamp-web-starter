import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ALLCLUBS } from './graphql'
import SearchBar from './SearchBar'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'

const Clubs = () => {
  const { loading, error, data } = useQuery(ALLCLUBS)
  console.log(data)

  if (loading) return 'Loading!'
  if (error) return 'error!'


  return (
    <ClubContainer>
      <SearchBar />
      <ShowClubs clubArray={data} />
    </ClubContainer>

  )
}

export default Clubs
