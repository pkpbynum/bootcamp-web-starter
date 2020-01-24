import {
  useQuery,
  useLazyQuery,
} from '@apollo/react-hooks'
import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { ALLCLUBS } from './graphql'
import SearchBar from './SearchBar'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'
import {
  SEARCH,
} from './SearchBar/graphql'

const Clubs = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()
  const [clubs, setClubs] = useState([])

  const { loading, error, data } = useQuery(ALLCLUBS)

  const [search, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(
    SEARCH,
    {
      variables: { searchText: input },
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
  if (loading || loading2) return (<ClubContainer><SearchBar /></ClubContainer>)
  if (error || error2) return 'error!'

  console.log(data2)

  const clubArray = () => {
    if (!data2) {
      console.log(data.allClubs)
      return data.allClubs
    }
    console.log(data2.search)
    return data2.search
  }


  return (
    <ClubContainer>
      <SearchBar input={input} setInput={setInput} search={search} />
      <ShowClubs clubArray={clubArray()} />
    </ClubContainer>

  )
}

export default Clubs
