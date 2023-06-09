import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { createDecorator } from '../decorator'

export type VinessI18nConfig<T = object> = InitOptions<T>

export function initI18n<T>(option: InitOptions<T>) {
    i18n.use(initReactI18next).init({
        debug: false,
        lng: 'zh',
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false
        },
        ...option
    })
}

export { type InitOptions }

export const II18n = createDecorator<I18n>('II18n')

export class I18n {
    static configure<T extends object>(config: InitOptions<T>) {
        initI18n(config)
        return I18n
    }

    get t() {
        return i18n.t
    }
}
