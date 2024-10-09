<template>
  <nav>
    <p>{{ $t("message.hello", { user: 'Anna'}) }}</p>
    
    <router-link
      v-for="item in items"
      :key="item.label"
      :to="item.route"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      items: [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'Sobre',
          route: '/about'
        }
      ]
    }
  }
}
</script>
<style scoped>
:root{
  --nav-bg: #ffffff;
  --nav-text: #212121;
}

@media (prefers-color-scheme: dark) {
  :root {
    --nav-bg: #212121;
    --nav-text: #ffffff;
  }
}

nav {
  display: flex;
  justify-content:end;
  padding: 2rem;
  background-color: var(--nav-bg);
  color: var(--nav-text);
}

nav > * {
  margin: 1rem;
}

nav a {
  color: var(--nav-text);
  text-decoration: none;
}
</style>