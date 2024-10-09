<template>
	<filter-place @filterBy="getFilterResult"/>
</template>
<script>
import FilterPlace from '../components/filters/FilterPlace.vue'

export default {
	components: { FilterPlace },
	name: 'PageHome',
	methods: {
		getFilterResult(result) {
			//console.log(result);
		}
	}
}
</script>
