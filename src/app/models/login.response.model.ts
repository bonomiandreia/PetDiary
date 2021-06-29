export interface LoginResponse {
    token: string,
    auth: {
        _id: string,
        email: string
    }
}