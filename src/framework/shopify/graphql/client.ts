import { GraphQLClient } from 'graphql-request';

const gqlClient = new GraphQLClient(`http://localhost:4000/graphql`);

export default gqlClient;
