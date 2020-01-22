import gql from 'graphql-tag'

export const REGISTER = gql`
mutation REGISTER($email: String!, $password:String!, $firstName: String!, $lastName: String!, $classYear: String!){
  register(email: $email, password:$password, firstName:$firstName, lastName:$lastName, classYear: $classYear){
    	token
    	user{
        id,
        firstName,
        lastName,
        classYear,
      }
    }
  }
`