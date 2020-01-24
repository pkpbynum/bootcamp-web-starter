import styled from 'styled-components'

export const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3vh;
    margin: 1vh;
    width: 70%;
    background-color: lightgrey;
    border-radius: 1vh;
`
export const CommentContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vh;
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
export const CommentInput = styled.input`
    font-family: ${({ theme }) => theme.fonts.standard};
    margin: 1vh;
    flex: 3;
    background-color: white;
    border: none;
    border-radius: 1vh;
    padding: 1vh;
    padding-left: 2vh;
    font-size: 3vh;
`

export const CommentButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.standard};
    flex: 1;
    border: none;
    border-radius: 1vh;
    background-color: ${({ theme }) => theme.colors.gold};
    font-size: 3vh;
    font-weight: bold;
    color: white;
    padding: 2vh;
`
export const CommentBubble = styled.div`
    font-family: ${({ theme }) => theme.fonts.standard};
    margin: 1vh;
    margin-left: 2vh;
    font-size: 2vh;
    background-color: white;
    border: none;
    border-radius: 2vh;
    padding: 2vh;

`
export const BubbleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    border-radius: 1vh;
`
