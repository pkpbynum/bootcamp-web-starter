import styled from 'styled-components'
import { CardElement } from 'react-stripe-elements'

export const DonateContainer = styled.div`
    border: none;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 3vh;
    margin: auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    height: 50vh;
    box-shadow: 0 4px 8px 0 #8dde8a, 0 6px 20px 0 #8dde8a;
    padding-bottom: 9%;
    padding-top: 9%;
`
export const DonateText = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 4vh;
    font-weight: bold;
    margin: 1vh;
    
`
export const DonateButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    font-size: 2vh;
    color: white;
    width: 70%;
    padding: 2vh;
    border-radius: 1vh;
    margin-top: 2vh;
    text-align: center;
    transition: .25s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.lightgreen};
        width: 100%;
        box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.green}, 0 6px 20px 0 ${({ theme }) => theme.colors.green};
    }
    &:focus {
        outline: none;
    }
`
export const StyledCardElement = styled(CardElement)`
    padding: 2vh;
    background-color: white;
    border-radius: 2vh;
    width: 100%;
`

export const ClubName = styled.input`
    border: lightgrey;
    border-radius: 2vh;
    background-color: white;
    height: 5vh;
    margin-top: 2vh;
    margin-bottom: 1vh;
    width: 31%;
    padding: 0.5vh;
    font-size: 2vh;
    padding-left: 2vh;
    transition: .25s;
    &:focus {
        outline: none;
        width: 60%;

    }
`
