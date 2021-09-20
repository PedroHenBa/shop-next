import FRAGMENTS from './fragments';

export const getAllProducts = `
${FRAGMENTS}
query getAllProducts($first: Int = 250) {
  products(first: $first) {
    edges{
      ...edges
    }
    pageInfo{
      ...pageInfo
    }
  }
}
`;

export default getAllProducts;
