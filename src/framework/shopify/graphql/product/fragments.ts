const FRAGMENTS_PRODUCT = `
  fragment pageInfo on PageInfo{
    hasNextPage
    hasNextPage
  }

  fragment edges on ProductEdge{
    node{
      ...node
    }
  }

  fragment node on Product{
    id
    title
    vendor
    handle
    description
    priceRange{
      minVariantPrice{
        amount
        currencyCode
      }
    }
    images(first: 1){
      ...images
    }
  }

  fragment images on ImageConnection{
    pageInfo{
      ...pageInfo
    }
    edges{
      node{
        ...nodeImage
      }
    }
  }

  fragment nodeImage on Image{
    originalSrc
    altText
    width
    height
  }
`;

export default FRAGMENTS_PRODUCT;
