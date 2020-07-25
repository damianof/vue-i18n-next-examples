import { expect } from 'chai'
import { i18n } from '@/plugins/vue-i18n-next-plugin'

describe('i18n', () => {

  describe('global', () => {
    describe('availableLocales', () => {
      it('should contain expected locales', () => {
        expect(i18n.global.availableLocales.length).to.be.equal(3)

        expect(i18n.global.availableLocales).to.contain('ja-JP')
        expect(i18n.global.availableLocales).to.contain('en-US')
        expect(i18n.global.availableLocales).to.contain('it-IT')
      })
    })

    describe('locale', () => {
      it('should equal ja-JP', () => {
        expect(i18n.global.locale.value).to.equal('ja-JP')
      })
    })

    describe('fallbackLocale', () => {
      it('should equal ja-JP', () => {
        expect(i18n.global.fallbackLocale.value).to.equal('ja-JP')
      })
    })
  })
})
