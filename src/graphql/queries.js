/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      name
      description
      types
      business_status
      formatted_phone_number
      rating
      user_ratings_total
      url
      website
      createdAt
      updatedAt
    }
  }
`;
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        types
        business_status
        formatted_phone_number
        rating
        user_ratings_total
        url
        website
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
