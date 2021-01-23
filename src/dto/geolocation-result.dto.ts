import { IHereOAuthTokenResponse } from '../interfaces/here.oauth.token-response.interface';
import { GeolocationQueryResultDTO } from './geolocation-query-result.dto';

export class GeolocationResultDTO {
    data: GeolocationQueryResultDTO
    token?: IHereOAuthTokenResponse
}
