import { gql } from 'graphql-request';

export const QUERY_GET_ALL_PRODUCTS_PATHS = gql`
  query getAllProductsPaths($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;

export default QUERY_GET_ALL_PRODUCTS_PATHS;
