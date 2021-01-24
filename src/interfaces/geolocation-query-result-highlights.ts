import { GeolocationQueryResultHighlightsLumbral } from './geolocation-query-result-highlights-lumbral';
import { GeolocationQueryResultHighlightsAddress } from './geolocation-query-result-highlights-address';
export interface GeolocationQueryResultHighlights {
    title?: GeolocationQueryResultHighlightsLumbral[]
    address?: GeolocationQueryResultHighlightsAddress
}