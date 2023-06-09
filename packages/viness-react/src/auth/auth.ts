import { createDecorator } from '../decorator'

export const IAuthentication = createDecorator<IAuthentication>('IAuthentication')

export interface IAuthentication {
    isAuthenticated(): boolean | Promise<boolean>
    hasRoles(roles?: string[]): boolean | Promise<boolean>
}

export class Authentication implements IAuthentication {
    isAuthenticated(): boolean | Promise<boolean> {
        return true
    }
    hasRoles(roles?: string[] | undefined): boolean | Promise<boolean> {
        return true
    }
}
