<template>
  <div>
    <p>
      {{ i18n.t('numbersView.currencyLabel') }}:
      {{ i18n.n(currencyValue, 'currency') }}
    </p>
    <p>
      {{ i18n.t('numbersView.numeric') }}:
      {{ i18n.n(decimalValue, 'numeric') }}
    </p>
    <p>
      {{ i18n.t('numbersView.decimalLabel') }}:
      {{ i18n.n(decimalValue, 'decimal') }}
    </p>
    <p>
      {{ i18n.t('numbersView.percentLabel') }}:
      {{ i18n.n(percentValue, 'percent') }}
    </p>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'Numbers',
  components: {},
  setup() {
    const i18n = useI18n()

    const currencyValue = 12345678.27
    const decimalValue = 98745.282791
    const percentValue = 0.456

    return {
      i18n,
      currencyValue,
      decimalValue,
      percentValue
    }
  }
}
</script>
