import { expect } from 'chai'
import _ from 'underscore'
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

    describe('datetimeFormats', () => {
      it('ja-JP should be as expected', () => {
        const formats = i18n.global.datetimeFormats.value

        const expected: any = {
          long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }
        }
        expect(_.isEqual(formats['ja-JP'], expected)).to.be.true
      })

      it('en-US should be as expected', () => {
        const formats = i18n.global.datetimeFormats.value

        const expected: any = {
          long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }
        }
        expect(_.isEqual(formats['en-US'], expected)).to.be.true
      })

      it('it-IT should be as expected', () => {
        const formats = i18n.global.datetimeFormats.value

        const expected: any = {
          long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          }
        }
        expect(_.isEqual(formats['it-IT'], expected)).to.be.true
      })
    })
  })
})
