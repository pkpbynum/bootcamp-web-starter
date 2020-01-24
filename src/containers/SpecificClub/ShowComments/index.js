import React, { useReducer, useQuery } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ADDEVAL, GETEVAL } from './graphql'
import {
  Comment, CommentContainer, CommentInput, CommentButton,
} from './styles'

const ShowComments = () => {
  const [club, setClub] = useState()
  const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [form, setForm] = useReducer(formReducer,
    {
      hoursOfMeeting: '',
      hoursOfWork: '',
      rating: '',
      comments: '',
    })

  const { loading: evalLoading, error: evalError, data: evalData } = useQuery(GETEVAL,
    {
      variables: { clubId: club },
      // Make sure to change so that it knows what state - what the club id is!
    })

  const [createEvaluation, { data, loading, error }] = useMutation(ADDEVAL, {
    variables: {
      input:
        form,
    },

    onCompleted: () => console.log('yay'),

    update: (client, { data: { addEvaluation } }) => {
      try {
        const data = client.readQuery({ query: GETEVAL })

        data.evaluation = [...data.evaluation, addEvaluation]

        client.writeQuery({ query: GETEVAL, data })
      } catch (err) {
        // nothing
      }
    },
  })
  return (
    <>
      <CommentContainer>
        <Comment style={{ fontWeight: 'bold' }}> Comments: </Comment>
        {evalData.getEvaluationsofClub.map(
          ({ id, firstName, lastName }) => <p key={id}>{`${firstName} ${lastName}`}</p>,
        )}
      </CommentContainer>
      <CommentContainer>
        <CommentInput placeholder="Hours of Meeting" name="hoursOfMeeting" onChange={e => setForm({ [e.target.name]: e.target.value })} />
        <CommentInput placeholder="Hours of Work" name="hoursOfWork" onChange={e => setForm({ [e.target.name]: e.target.value })} />
        <CommentInput placeholder="Rating" name="rating" onChange={e => setForm({ [e.target.name]: e.target.value })} />
        <CommentInput placeholder="Comments" name="comments" onChange={e => setForm({ [e.target.name]: e.target.value })} />
        <CommentButton onClick={createEvaluation}>Comment</CommentButton>
      </CommentContainer>
    </>
  )
}

export default ShowComments
