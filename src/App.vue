<template>
  <div id="app">
    <NavigationBar v-if="showNavigationBar" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/navigationBar.vue'

export default {
  name: 'App',
  components: { NavigationBar },
  computed: {
    showNavigationBar() {
      const routes = ['/signin', '/signup']
      return !routes.includes(this.$route.path)
    }
  }
}
</script>
