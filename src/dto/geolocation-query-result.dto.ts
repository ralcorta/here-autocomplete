import { IHereOAuthTokenResponse } from '../interfaces/here.oauth.token-response.interface';

export class GeolocationResultDTO {
    data: GeolocationQueryResultDTO
    token?: IHereOAuthTokenResponse
}


export class GeolocationQueryResultDTO {
    items: Array<GeolocationQueryResultItem>
}

export class GeolocationQueryResultItem {
    title: string
    id: string
    resultType: string
    address: GeolocationQueryResultAddress
    highlights?: GeolocationQueryResultHighlights
}

export class GeolocationQueryResultAddress {
    label: string
    countryCode: string
    countryName: string
    stateCode: string
    state: string
    countyCode: string
    county: string
    city: string
    district: string
    street: string
    postalCode: string
}

export class GeolocationQueryResultHighlights {
    title?: GeolocationQueryResultHighlightsLumbral[]
    address?: GeolocationQueryResultHighlightsAddress
}

export class GeolocationQueryResultHighlightsAddress {
    label: GeolocationQueryResultHighlightsLumbral[]
    city: GeolocationQueryResultHighlightsLumbral[]
    street: GeolocationQueryResultHighlightsLumbral[]
}

export class GeolocationQueryResultHighlightsLumbral {
    start?: number
    end?: number
}