<template>
	<div class="home">
		<h2>{{ i18n.t('welcome') }}</h2>
		<img alt="Vue logo" width="50" src="../assets/logo.png">
		<p>{{ i18n.t('helloWorldView.message') }}</p>
	</div>
</template>

<script>
	import { useI18n } from 'vue-i18n'

	export default {
		name: 'Home',
		components: {
		},
		setup() {
			const i18n = useI18n()
	  		return { 
				i18n
			}
		}
	}
</script>
