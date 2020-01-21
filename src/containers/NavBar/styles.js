import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 2vh solid ${({ theme }) => theme.colors.lightred};
    padding: none;
`

export const LogoButton = styled.button`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    
`
export const LogoText = styled.p`
    color: ${({ theme }) => theme.colors.crimson};
    font-size: 6vh;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    margin: 0px;
    padding-right: 1vw;
`

export const NavButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.crimson};
    border: none;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    font-size: 5vh;
    color: white;
`
export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
`

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    height: 8vh;
    border: none;
    margin: 0.7vh;
`
export const ButtonLink = styled(Link)`
    text-decoration: none;
    flex:1;
    margin: 0px;
`