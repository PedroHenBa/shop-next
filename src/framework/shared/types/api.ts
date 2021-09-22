export type RequestApiParams = {
  query: string;
};

export interface ApiConfig {
  url: string;
  requestApi<T>(options: RequestApiParams): Promise<T>;
}
