<template>
  <div id="app">
    <NavigationBar v-if="showNavigationBar" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: { NavigationBar },
  computed: {
    showNavigationBar() {
      const routes = ['/signin', '/signup']
      console.log(!routes.includes(this.$route.path))
      return !routes.includes(this.$route.path)
    }
  }
}
</script>
