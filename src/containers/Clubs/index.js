import { useQuery } from '@apollo/react-hooks'
import { ALLCLUBS } from './graphql'
import React, { useState } from 'react'
import {
  useLazyQuery,
} from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import SearchBar from './SearchBar'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'
import {
  SEARCH,
} from './SearchBar/graphql'

const Clubs = () => {
  const { loading, error, data } = useQuery(ALLCLUBS)


  if (loading) return 'Loading!'
  if (error) return 'error!'


  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()

  const [search, { loading, error, data }] = useLazyQuery(
    SEARCH,
    {
      variables: { input },
      // onError: ({ graphQLErrors }) => {
      //   if (graphQLErrors) {
      //   // graphQLErrors.map(({ message, locations, path }) => console.log(
      //   // `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      //     setMessage(graphQLErrors[0].message)
      //   // ))
      //   }
      // },
    },
  )

  return (
    <ClubContainer>
      <SearchBar input={input} setInput={setInput} />
      <ShowClubs clubArray={clubArray} />
    </ClubContainer>

  )
}

export default Clubs
