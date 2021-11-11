export type Variables = { [key: string]: string | undefined | string[] };

export type RequestApiParams = {
  query: string;
  variables?: Variables;
};

export interface ApiConfig {
  url: string;
  requestApi<T>(options: RequestApiParams): Promise<T>;
}
