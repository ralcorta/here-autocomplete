import { GeolocationQueryResultAddress } from './geolocation-query-result-address';
import { GeolocationQueryResultHighlights } from './geolocation-query-result-highlights';

export class GeolocationQueryResultItem {
    title: string
    id: string
    resultType: string
    address: GeolocationQueryResultAddress
    highlights?: GeolocationQueryResultHighlights
}