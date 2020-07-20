
import { createI18n, LocaleMessages } from 'vue-i18n'
import { IAvailableLocaleInfo } from '@/models/IAvailableLocaleInfo'

interface ILocalesData { 
	datetimeFormats: any // TODO: see if vue-i18n has a type for this
	numberFormats: any // TODO: see if vue-i18n has a type for this
	messages: LocaleMessages
}

/**
 * @name: loadLocalesData
 * @description: Helper to load the locale json files with each locale data
 */
const loadLocalesData = (): ILocalesData => {
	const locales = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
	const localeData: ILocalesData = {
		datetimeFormats: {},
		numberFormats: {},
		messages: {}
	}
	const keys: string[] = locales.keys()
	keys.forEach((key: string) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i)
		if (matched && matched.length > 1) {
			const locale = matched[1]
			localeData.numberFormats[locale] = locales(key).numberFormats
			localeData.datetimeFormats[locale] = locales(key).datetimeFormats
			localeData.messages[locale] = locales(key).messages
		}
	})
	
	return localeData
}

const data: ILocalesData = loadLocalesData()

export const i18n = createI18n({
	locale: 'ja-JP',
	fallbackLocale: 'ja-JP',
	messages: data.messages,
	datetimeFormats: data.datetimeFormats,
	numberFormats: data.numberFormats
})


export const availableLocales: IAvailableLocaleInfo[] = [{
	name: 'Japan',
	locale: 'ja-JP',
	flag: 'jp',
	selected: true // set ja-JP selected by default
}, {
	name: 'USA',
	locale: 'en-US',
	flag: 'us',
	selected: false
}, {
	name: 'Italy',
	locale: 'it-IT',
	flag: 'it',
	selected: false
}]
