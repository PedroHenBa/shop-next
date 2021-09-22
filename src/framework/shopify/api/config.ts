import { requestApi } from '@framework/utils';
import { ApiConfig } from '@shared/types/api';

class Config {
  private readonly config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({ url: 'http://localhost:4000/graphql', requestApi: requestApi });

export default configWrapper.getConfig();
