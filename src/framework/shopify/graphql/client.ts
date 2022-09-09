import { GraphQLClient } from 'graphql-request';
import config from '@framework/api/config';

const gqlClient = new GraphQLClient(config.url);

export default gqlClient;
