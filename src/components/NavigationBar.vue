<template>
  <nav class="navi">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <router-link to="/" exact-active-class="active"> <img :src="require('@/assets/images/open-book.png')"
          alt="Vue logo" width="50" /> 
      </router-link>

      <div class="navbar-links d-none d-md-flex gap-5"
        style="justify-items: center; justify-content: center; align-items: center; align-content: center;">
        <router-link to="/" exact-active-class="active" class="nav-link">Home</router-link>
        <router-link to="/books" active-class="active" class="nav-link">Book</router-link>
        <a class="nav-link" href="mailto:aliaanadzirahh00@gmail.com?subject=Prosepeek%20Review" target="_blank"
          rel="noopener noreferrer">
          Contact
        </a>
        <MainButton @click="goToSignIn()">Get Started</MainButton>
      </div>
    </div>
  </nav>
</template>


<script>
import MainButton from './button/MainButton.vue';

export default {
  name: 'NavigationBar',
  components: { MainButton },

  methods: {
    goToSignIn() {
      this.$router.push("/signin");
    },
  }
}
</script>

<style scoped>
.navi {
  background-color: var(--sand);
  padding: 24px;
  font-family: 'Poppins';
}

.nav-link {
  margin-top: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  padding-bottom: 4px;
  border-bottom: 2px solid var(--orange);
}
</style>