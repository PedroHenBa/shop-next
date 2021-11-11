import { GraphQLClient } from 'graphql-request';
import config from '@framework/api/config';

const gqlClient = new GraphQLClient('http://localhost:4000/graphql');

export default gqlClient;
