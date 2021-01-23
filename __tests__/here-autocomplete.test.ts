import { HereAutocomplete } from '../src/classes/here-autocomplete';
import { GeolocationResultDTO } from '../src/dto/geolocation-query-result.dto';
import { HereEndpointEnum } from '../src/enums/here.endpoint.enum';
import nock from 'nock';
import dotenv from 'dotenv';
dotenv.config();

describe('HereAutocompleteTest', () => {
    let hereAutocomplete: HereAutocomplete;
    let hereAutocompleteEndpoint: string = HereEndpointEnum.AUTOCOMPLETE;
    let hereOAuthEndpoint: string = HereEndpointEnum.OAUTH_TOKEN;
    let query = {
        q: 'buenos aires'
    };

    beforeAll(() => {
        hereAutocomplete = new HereAutocomplete({
            accessKeyId: process.env.HERE_ACCESS_KEY_ID ?? 'KEY_ID',
            accessKeySecret: process.env.HERE_ACCESS_KEY_SECRET ?? 'KEY_SECRET',
        })

        const fixture = require("./fixtures/here-locations.json");
        const oauthResponse = require("./fixtures/here-auth-token.json");

        nock(hereAutocompleteEndpoint)
            .get(/.*/)
            .reply(200, fixture)

        nock(hereOAuthEndpoint)
            .post(/.*/)
            .reply(200, oauthResponse)
    })

    test('Here autocomplete happy path', async () => {
        const response: GeolocationResultDTO = await hereAutocomplete.search(query)
        console.log(response);
        expect(response.data.items).toBeDefined();
        expect(response.data.items.length).toBeGreaterThan(0);
    });

});