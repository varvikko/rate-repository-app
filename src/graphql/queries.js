import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    id
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl
                }
            }
        }
    }
`;

export const AUTHORIZED = gql`
    query {
        authorizedUser {
            id
        }
    }
`;

export const GET_REPOSITORY = gql`
    query getRepository($id: ID!) {
        repository(id: $id) {
            id,
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage,
            ownerAvatarUrl,
            url
        }
    }
`;
