import { IHereQuery } from './here-query.interface';
import { GeolocationResultDTO } from '../dto/geolocation-result.dto';

/**
 * Interface for tpye here.com or another geoloaction service.
 */
export interface IGeolocationAutocomplete {
    search(query: IHereQuery): Promise<GeolocationResultDTO>;
}