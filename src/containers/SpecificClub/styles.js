import styled from 'styled-components'

export const LargeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`

export const TitleContainer = styled.div`
    width: 70%;
    display: flex;
    background-color: grey;
    border: none;
    border-radius: 2vh;
`
export const Title = styled.p`
    margin: 2vh;
    font-size: 5vh;
    color: black;
    font-family: ${({ theme }) => theme.fonts.standard};

`
export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    padding: 2vh;
    margin: 2vh;
`

export const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh;
`
export const SmallerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

`
