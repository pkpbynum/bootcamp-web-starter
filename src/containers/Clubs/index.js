import React from 'react'
import SearchBar from './SearchBar'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'

const Clubs = () => {
  const clubArray = [{ title: 'Clubname', id: '231d606c-c663-4803-adba-ea4c0101bf42' }, { title: 'club2', id: 'unique2' }]

  return (
    <ClubContainer>
      <SearchBar />
      <ShowClubs clubArray={clubArray} />
    </ClubContainer>

  )
}

export default Clubs
