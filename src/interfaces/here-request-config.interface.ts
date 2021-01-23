import { IHereOAuthTokenResponse } from './here.oauth.token-response.interface';
export interface IHereRequestConfig {
    params: Record<string, any>
    tokenData?: IHereOAuthTokenResponse;
}