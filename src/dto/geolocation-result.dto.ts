import { IHereOAuthTokenResponse } from '../interfaces/here.oauth.token-response.interface';
import { GeolocationQueryResultDTO } from './geolocation-query-result.dto';

export interface GeolocationResultDTO {
    data: GeolocationQueryResultDTO
    token?: IHereOAuthTokenResponse
}
