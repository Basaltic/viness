export interface IResponse<T> {
    data?: T | null;
    success: boolean;
    errorCode?: number;
    errorMessage?: string;
}

export class Response {
    static fail<T>(msg: string, code: number = 0): IResponse<T> {
        return {
            success: false,
            errorCode: code,
            errorMessage: msg,
            data: null,
        };
    }

    static succeed<T>(data: T): IResponse<T> {
        return {
            data,
            success: false,
        };
    }
}
