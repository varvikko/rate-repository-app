import { gql } from "apollo-boost";

export const LOG_IN = gql`
mutation logIn($username: String!, $password: String!) {
    authorize(credentials: {username: $username, password: $password}) {
        accessToken
    }
}
`;