/**
 * Configuration for here package init
 */
export interface IHereConfig {
    /**
     * Acces key id of credentials file. Only is necesary if token don't exist.
     */
    accessKeyId?: string,

    /**
     * Acces key secret of credentials file. Only is necesary if token don't exist.
     */
    accessKeySecret?: string,

    /**
     * OAuth token if exist.
     */
    token: string
}