import { IGeolocationAutocomplete } from '../interfaces/geolocation-autocomplete.interface';
import { HereOAuthToken } from './here.oauth.token';
import { IHereConfig } from '../interfaces/here.config.interface';
import axios from 'axios';
import { GeolocationResultDTO, GeolocationQueryResultDTO } from '../dto/geolocation-query-result.dto';
import { IHereQuery } from '../interfaces/here-query.interface';
import { HereEndpointEnum } from '../enums/here.endpoint.enum';
import { IHereRequestConfig } from '../interfaces/here-request-config.interface';
import { IHereHeaderConfig } from '../interfaces/here-header-config.interface';
import { IHereOAuthTokenResponse } from '../interfaces/here.oauth.token-response.interface';

export class HereAutocomplete implements IGeolocationAutocomplete {

    private readonly _hereOAuthToken: HereOAuthToken;
    private readonly _httpService = axios;
    private readonly _config?: IHereConfig;

    constructor(config?: IHereConfig) {
        this._config = config;
        this._hereOAuthToken = new HereOAuthToken(config);
    }

    public async search(query: IHereQuery): Promise<GeolocationResultDTO> {
        try {
            const { q } = query;
            const config: IHereRequestConfig = await this.getHereRequestConfig({
                params: { q }
            });
            const result = await this._httpService.get<GeolocationQueryResultDTO>(HereEndpointEnum.AUTOCOMPLETE, config.params);
            const data: GeolocationResultDTO = { data: result.data };
            if (config.tokenData)
                data.token = config.tokenData
            return data;
        } catch (error) {
            throw error
        }
    }

    private async getHereRequestConfig(params: Record<string, any>): Promise<IHereRequestConfig> {
        const headersData = await this.getHeaders(params.headers);
        return {
            params: {
                ...params,
                headers: headersData.headers,
            },
            tokenData: headersData.tokenData
        }
    }

    private async getHeaders(querys: Record<string, any>): Promise<IHereHeaderConfig> {
        let token: IHereOAuthTokenResponse | undefined;

        if (!this._config?.token)
            token = await this._hereOAuthToken.getOAuthToken();

        if (!token)
            throw new Error(/** COMPLETE */)

        const accessToken: string = this._config?.token ?? token?.access_token;

        if (!accessToken)
            throw new Error(/** COMPLETE */)

        return {
            headers: {
                ...querys,
                Authorization: `Bearer ${accessToken}`
            },
            tokenData: token,
        }
    }
}