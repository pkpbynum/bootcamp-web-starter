import styled from 'styled-components'

export const FootContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.crimson};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: ${({ theme }) => theme.colors.lightred} 1vh solid; 
    font-family:${({ theme }) => theme.fonts.standard};
`

export const FootText = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-size: 2vh;

`
