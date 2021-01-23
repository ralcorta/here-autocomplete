import { IHereOAuthTokenResponse } from './here.oauth.token-response.interface';
export interface IHereHeaderConfig {
    headers: Record<string, any>
    tokenData?: IHereOAuthTokenResponse;
}