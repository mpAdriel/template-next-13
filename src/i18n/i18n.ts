import i18next from 'i18next'

import { en } from './en'
import { es } from './es'

export const initI18N = async (language?: string) => {
	await i18next.init({
		lng: language || 'en', // if you're using a language detector, do not define the lng option
		debug: false,
		resources: {
			en,
			es,
		},
	})
}

export const t = (key: string, options?: object) => {
	return i18next.t(key, options || {})
}
