import { createDecorator } from '../../instantiation'
import { IApple } from './apple'

export interface IAlice {
    _serviceBrand: undefined
    eatApple(): void
}

export const IAlice = createDecorator<IAlice>('IAlice')

export class Alice implements IAlice {
    _serviceBrand: undefined
    private random: number

    constructor(@IApple private apple: IApple) {
        this.random = Math.random() * 100
    }

    eatApple(): void {
        console.log('I am alice -- ', this.random)
        this.apple.eat()
    }
}
