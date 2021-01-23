export interface IHereAuthenticationRequest {
    oauth_consumer_key: string;
    oauth_signature_method: string;
    oauth_timestamp: number;
    oauth_nonce: string;
    oauth_version: string;
    oauth_signature?: string;
    grant_type?: string;
}