import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 2vh solid ${ ({theme}) => theme.colors.lightred};
    padding: none;
`

export const LogoButton = styled.button`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    border: none;
    margin: 0.7vh;
`
export const LogoText = styled.p`
    color: ${({theme}) => theme.colors.crimson};
    font-size: 6vh;
    font-family: ${({theme}) => theme.fonts.standard};
    font-weight: bold;
    margin: 0px;
    padding-right: 1vw;
`

export const NavButton = styled.button`
    flex:1;
    background-color: ${({theme}) => theme.colors.crimson};
    border: none;
    font-family: ${({theme}) => theme.fonts.standard};
    font-weight: bold;
    font-size: 5vh;
`
export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
`