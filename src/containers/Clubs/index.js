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
  const [sortState, setSortState] = useState(0)

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
    let output = []
    if (!data2) {
      console.log(data.allClubs)
      output = data.allClubs
    } else {
      console.log(data2.search)
      output = data2.search
    }

    if (sortState === 1) {
      output.sort((a, b) => ((a.name > b.name) ? 1 : -1))
    // } else if (sortState === 2) {
    //   output.sort((a, b) => ((a.rating > b.rating) ? 1 : -1))
    // } else if (sortState === 3) {
    //   output.sort((a, b) => ((a.rating > b.rating) ? 1 : -1))
    }
    return output
  }


  return (
    <ClubContainer>
      <SearchBar input={input} setInput={setInput} search={search} sortState={sortState} setSortState={setSortState} />
      <ShowClubs clubArray={clubArray()} />
    </ClubContainer>

  )
}

export default Clubs
