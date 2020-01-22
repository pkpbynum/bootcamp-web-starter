import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GETCLUB } from './graphql'
import ShowComments from './ShowComments'
import {
  LargeContainer, SmallContainer, SmallerContainer, Title, TitleContainer,
  SummaryContainer, SummaryHead, Summary,
} from './styles'

const SpecificClub = () => {
  // const info = { title: 'Club' }
  const { id } = useParams()
  const history = useHistory()
  const [data, error] = useQuery(GETCLUB, { variables: { clubId: id }, partialRefetch: true })
  if (error) {
    history.push('/Browse')
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <LargeContainer>
        <TitleContainer>
          <Title>{ data.title }</Title>
        </TitleContainer>
      </LargeContainer>
      <LargeContainer>
        <SummaryContainer>
          <SummaryHead>Summary:</SummaryHead>
          <Summary>{data.summary}</Summary>
        </SummaryContainer>
        <SmallContainer>
          <SmallerContainer>
              Rating:
          </SmallerContainer>
          <SmallerContainer>
              Tags:
          </SmallerContainer>
        </SmallContainer>
      </LargeContainer>
      <ShowComments />
    </div>
  )
}

export default SpecificClub
