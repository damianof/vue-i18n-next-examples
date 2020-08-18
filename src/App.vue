<template>
  <div id="app">
  <h1>vue-i18n-next-examples</h1>
  <LocaleComp :items="availableLocales" />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/datetime">Datetime</router-link> |
    <router-link to="/numbers">Numbers</router-link>
  </div>
  <hr/>
  <router-view/>
  </div>
</template>

<script lang="ts">
  import { useI18n } from 'vue-i18n'
  import { availableLocales } from '@/plugins/vue-i18n-next-plugin'
  import LocaleComp from '@/components/locale-selectors/LocaleToolbar.component.vue'

  export default {
    name: 'Home',
    components: {
      LocaleComp
    },
    setup() {
      const i18n = useI18n()
        return {
        i18n,
        availableLocales
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 10px;
    color: #2c3e50;

    h1 {
      padding: 0;
      margin: 0;
    }
  }

  #nav {
    padding: 15px 0;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
      color: #42b983;
      }
    }
  }
</style>
