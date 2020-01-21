import React from 'react'
import {
  LargeContainer, SmallContainer, SmallerContainer, Title, TitleContainer, SummaryContainer,
} from './styles'

const SpecificClub = () => {
  const info = { title: 'Club' }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <LargeContainer>
        <TitleContainer>
          <Title>{ info.title }</Title>
        </TitleContainer>
      </LargeContainer>
      <LargeContainer>
        <SummaryContainer>
          text
        </SummaryContainer>
        <SmallContainer>
          <SmallerContainer>
              Rating
          </SmallerContainer>
          <SmallerContainer>
              Tags
          </SmallerContainer>
        </SmallContainer>
      </LargeContainer>
    </div>
  )
}

export default SpecificClub
