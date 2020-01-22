import React from 'react'
import { Comment, CommentContainer } from './styles'

const ShowComments = () => (
  <CommentContainer>
    <Comment style={{ fontWeight: 'bold' }}> Comments: </Comment>
  </CommentContainer>
)

export default ShowComments
