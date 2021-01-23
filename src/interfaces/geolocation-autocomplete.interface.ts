import { GeolocationResultDTO } from '../dto/geolocation-query-result.dto';
import { IHereQuery } from './here-query.interface';

/**
 * Interface for tpye here.com or another geoloaction service.
 */
export interface IGeolocationAutocomplete {
    search(query: IHereQuery): Promise<GeolocationResultDTO>;
}