import styled from 'styled-components'

export const CommentContainer = styled.div`
    display: flex;
    padding: 1vh;
    margin: 1vh;
    width: 70%;
    background-color: lightgrey;
    border-radius: 1vh;
`

export const Comment = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    margin: 1vh;
    margin-left: 2vh;
    font-size: 4vh;

`
