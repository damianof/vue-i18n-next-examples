<template>
  <div>
    <p>
      {{ i18n.t('datetimeView.longDateLabel') }}: {{ i18n.d(value, 'long') }}
    </p>
    <p>
      {{ i18n.t('datetimeView.shortDateLabel') }}: {{ i18n.d(value, 'short') }}
    </p>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  name: 'Datetime',
  components: {},
  setup() {
    const i18n = useI18n()
    const value = new Date()
    return {
      i18n,
      value
    }
  }
}
</script>
