import { GeolocationQueryResultAddress, GeolocationQueryResultHighlights } from './geolocation-query-result.dto';

export class GeolocationQueryResultItem {
    title: string
    id: string
    resultType: string
    address: GeolocationQueryResultAddress
    highlights?: GeolocationQueryResultHighlights
}