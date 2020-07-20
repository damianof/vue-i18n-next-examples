<template>
  <div id="app">
	<h1>vue-i18n-next-examples</h1>
	<LocaleComp :items="availableLocales" />
	<div id="nav">
	  <router-link to="/">Home</router-link> | 
	  <router-link to="/datetime">Datetime</router-link> | 
	  <router-link to="/numbers">Numbers</router-link>
	</div>
	<router-view/>
  </div>
</template>

<script lang="ts">
	import { useI18n } from 'vue-i18n'
	import LocaleComp from '@/components/locale-selectors/LocaleToolbar.component.vue'
	import { availableLocales } from '@/plugins/vue-i18n-next-plugin'

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
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 31px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
			color: #42b983;
			}
		}
	}
</style>
