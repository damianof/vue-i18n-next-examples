<template>
  <div>
    <p>{{ i18n.t('datetimeView.currentLabel') }}: {{ i18n.d(value, 'long') }}</p>
  </div>
</template>

<script lang="ts">
  import { useI18n } from 'vue-i18n'

  export default {
    name: 'Datetime',
    components: {
    },
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
