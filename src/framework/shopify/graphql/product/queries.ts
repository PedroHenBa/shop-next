import { gql } from 'graphql-request';
import FRAGMENTS from './fragments';

export const QUERY_GET_ALL_PRODUCTS = gql`
  ${FRAGMENTS}
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      edges {
        ...edges
      }
      pageInfo {
        ...pageInfo
      }
    }
  }
`;

export default QUERY_GET_ALL_PRODUCTS;
