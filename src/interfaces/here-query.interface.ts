import { IHereQueryTypesEnum } from '../enums/here-query-types.enum';
export interface IHereQuery {
    q: string,
    at?: string,
    in?: string,
    limit?: number,
    types?: IHereQueryTypesEnum,
    lang?: string,
}

