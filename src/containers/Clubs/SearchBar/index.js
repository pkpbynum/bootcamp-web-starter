import React, { useState } from 'react'
import {
  SearchContainer, SearchInput, SearchButton, SortContainer, SmallButton,
} from './styles'

const SearchBar = () => {
  const [input, setInput] = useState('')

  return (
    <SearchContainer>
      <SearchInput placeholder="Search Clubs" value={input} onChange={e => setInput(e.target.value)} />
      <SearchButton>Search</SearchButton>
      <SortContainer>
        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Sort By: </p>
        <SmallButton>A-Z</SmallButton>
        <SmallButton>Rank</SmallButton>
        <SmallButton>Hours</SmallButton>
      </SortContainer>
    </SearchContainer>
  )
}

export default SearchBar
