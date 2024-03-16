export interface TokenData {
    userId: string;
    name: string;
    email: string;
}

export interface DecodedToken extends Omit<TokenData, 'userId'> {
    exp: number;
    id: string;
}
