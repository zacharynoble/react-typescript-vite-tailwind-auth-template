export interface TokenData {
    name: string;
    email: string;
}

export interface DecodedToken extends TokenData {
    exp: number;
}
