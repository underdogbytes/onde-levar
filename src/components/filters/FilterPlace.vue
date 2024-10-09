<template>
  <form
    id="filterPlace"
    v-on:submit.prevent
    @submit="emitFilter">
    <label for="words">Pesquise por palavras:</label>
		<input
			type="text"
      id="words"
			placeholder="Pesquise aqui por palavras"
			v-model="form.search">
		
		<div
      v-for="category in categories"
      :key="category.id">
			<input
				type="checkbox"
        :id="category.id"
				:value="category.name"
				v-model="form.categories" />
			<label :for="category.id">{{ category.name }}</label>
		</div>
		<button type="submit" :disabled="allowInteraction">Filtrar</button>
    <button @click="resetFilter" :disabled="allowInteraction">Limpar filtro</button>
	</form>
</template>
<script>
export default {
  name: 'FilterPlace',
  data() {
		return {
			places: [],
			categories: [
				{
					id: 'metal',
					name: 'Metal'
				},
				{
					id: 'nerd',
					name: 'Nerd'
				},
				{
					id: 'rock',
					name: 'Rock'
				}
			],
			form: {
				search: '',
				categories: []
			}
		}
  },
  computed: {
    allowInteraction() {
      return this.form.search.length === 0 && this.form.categories.length === 0;
    }
  },
  methods: {
    emitFilter() {
      this.$emit('filterBy', this.form);
    },
    resetFilter() {
      this.form.search = ''
      this.form.categories = []
      this.emitFilter();
    }
  }
}
</script>