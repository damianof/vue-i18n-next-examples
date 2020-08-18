
import { createI18n, LocaleMessageDictionary } from 'vue-i18n'
import { LocaleInfoInterface } from '@/models/LocaleInfo.interface'

interface LocalesDataInterface {
  datetimeFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
  numberFormats: any // TODO: see if vue-i18n@next alpha 13 has a type for this
  messages: any // TODO: see if vue-i18n@next alpha 13 has a type for this
}

/**
 * @name: loadLocalesData
 * @description: Helper to load the locale json files with each locale data
 */
const loadLocalesData = (): LocalesDataInterface => {
  const locales = (require as any).context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const localeData: LocalesDataInterface = {
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

const data: LocalesDataInterface = loadLocalesData()

export const i18n = createI18n({
  locale: 'ja-JP',
  fallbackLocale: 'ja-JP',
  messages: data.messages,
  datetimeFormats: data.datetimeFormats,
  numberFormats: data.numberFormats
})


export const availableLocales: LocaleInfoInterface[] = [{
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

