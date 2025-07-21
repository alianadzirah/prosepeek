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
        <router-link v-if="username !== 'guest'" to="/readlist" active-class="active" class="nav-link">Read List</router-link>
        <a class="nav-link" href="mailto:aliaanadzirahh00@gmail.com?subject=Prosepeek%20Review" target="_blank"
          rel="noopener noreferrer">
          Contact
        </a>
        <MainButton v-if="username === 'guest'" @click="goToSignIn()">Get Started</MainButton>
        <MainButton v-if="username !== 'guest'" @click="signOut()">Sign out</MainButton>
      </div>

      <div v-if="username !== 'guest'" class="d-md-none">
        <i class="fas fa-sign-out-alt" @click="signOut()"
          style="font-size: 22px; color: var(--orange); cursor: pointer;"></i>
      </div>
    </div>
  </nav>
</template>


<script>
import MainButton from './button/mainButton.vue';

export default {
  name: 'NavigationBar',
  components: { MainButton },
  data() {
    return {
      username: sessionStorage.getItem('username') === null || sessionStorage.getItem('username') === 'guest' ? 'guest' : sessionStorage.getItem('username')
    }
  },
  methods: {
    goToSignIn() {
      this.$router.push("/signin");
    },
    signOut() {
      sessionStorage.setItem('username', 'guest');
      location.reload();
    }
  },
  mounted() {
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