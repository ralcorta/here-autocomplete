import { HereEndpointEnum } from '../enums/here.endpoint.enum';
import { IHereConfig } from '../interfaces/here.config.interface';
import { IHereOAuthTokenResponse } from '../interfaces/here.oauth.token-response.interface';
import axios from 'axios';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import qs from 'qs';

export class HereOAuthToken {

    private readonly _getOAuthTokenEndpoint: HereEndpointEnum = HereEndpointEnum.OAUTH_TOKEN;
    private readonly _hereConfig?: IHereConfig;
    private readonly _httpService = axios;

    constructor(config?: IHereConfig) {
        this._hereConfig = config;
    }

    public async getOAuthToken(): Promise<IHereOAuthTokenResponse> {
        let oAuthTokenResponse: IHereOAuthTokenResponse;
        try {
            oAuthTokenResponse = await this.getApiAccessToken();
        } catch (error) {
            throw error;
        }

        if (!oAuthTokenResponse)
            throw new Error(/** COMPLETE */);

        return oAuthTokenResponse;
    }

    private async getApiAccessToken(): Promise<IHereOAuthTokenResponse> {
        const oauth: OAuth = this.getOAuth();
        const requestData = {
            url: this._getOAuthTokenEndpoint,
            method: 'POST',
            data: { grant_type: 'client_credentials' },
        };
        const headers = oauth.toHeader(oauth.authorize(requestData));

        try {
            const result = await this._httpService.post<IHereOAuthTokenResponse>(requestData.url, qs.stringify(requestData.data), {
                headers: {
                    'Authorization': headers.Authorization,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const data: IHereOAuthTokenResponse = result.data;
            return data;
        } catch (error) {
            throw error
        }
    }

    private getOAuth(): OAuth {
        if (!this._hereConfig?.accessKeyId || !this._hereConfig?.accessKeySecret)
            throw new Error(/** COMPLETE */)

        return new OAuth({
            consumer: {
                key: this._hereConfig.accessKeyId,
                secret: this._hereConfig.accessKeySecret,
            },
            signature_method: 'HMAC-SHA256',
            hash_function(base, key) {
                return crypto
                    .createHmac('sha256', key)
                    .update(base)
                    .digest('base64')
            },
        });
    }
}