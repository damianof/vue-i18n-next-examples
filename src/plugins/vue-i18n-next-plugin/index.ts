
import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
	locale: 'en-US',
	fallbackLocale: 'en-US',
	messages: {
		'en-US': {
			welcome: 'Welcome'
		},
		'it-IT': {
			welcome: 'Benvenuto'
		}
	}
})

