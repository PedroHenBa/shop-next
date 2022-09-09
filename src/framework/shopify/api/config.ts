import { requestApi } from '@framework/utils';
import { ApiConfig } from '@shared/types/api';

export default {
  url: 'http://localhost:4000/graphql',
  requestApi: requestApi,
} as ApiConfig;
