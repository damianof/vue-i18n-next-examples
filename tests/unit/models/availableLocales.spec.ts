import { expect } from 'chai'
  import { LocaleInfoInterface } from '@/models/LocaleInfo.interface'
import { availableLocales } from '@/plugins/vue-i18n-next-plugin'

describe('availableLocales', () => {

  it('should contain at least one locale', () => {
    expect(availableLocales.length).to.be.greaterThan(0)
  })

  it('ja-JP: should be configured correctly', () => {
    const item = availableLocales.find(o => o.locale === 'ja-JP') as LocaleInfoInterface
    expect(item).to.not.be.undefined
    expect(item.name).to.equal('Japan')
    expect(item.flag).to.equal('jp')
    expect(item.selected).to.be.true
  })

  it('en-US: should be configured correctly', () => {
    const item = availableLocales.find(o => o.locale === 'en-US') as LocaleInfoInterface
    expect(item).to.not.be.undefined
    expect(item.name).to.equal('USA')
    expect(item.flag).to.equal('us')
    expect(item.selected).to.be.false
  })

  it('it-IT: should be configured correctly', () => {
    const item = availableLocales.find(o => o.locale === 'it-IT') as LocaleInfoInterface
    expect(item).to.not.be.undefined
    expect(item.name).to.equal('Italy')
    expect(item.flag).to.equal('it')
    expect(item.selected).to.be.false
  })
})
