<script>
export default {
	name: 'App'
}
</script>

<template>
	<div id="app">
		<h2>{{ $t("message.hello", { user: 'Anna'}) }}</h2>

		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</nav>
	</div>

	<router-view />
</template>