<script>
import Navbar from './components/navbar/Navbar.vue'
export default {
	components: { Navbar },
	name: 'App'
}
</script>

<template>
	<div id="app">
		<navbar />
	</div>

	<router-view />
</template>