import styled from 'styled-components'

export const JumboContainer = styled.div`
    width: 100%;
    background-color: black;
    position: relative;
    text-align: center;
`

export const JumboImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 60%;

`
export const HomeText = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 15vh;
    color: white;
    margin: 0.5vh;
`

export const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoginButton = styled.button`
    border:none;
    border-radius: 1vh;
    color: white;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 3vh;
    font-weight: bold;
    padding: 2vh;
    margin: 1vh;
    width: 30%;
`