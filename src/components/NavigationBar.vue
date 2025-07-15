<template>
  <nav class="navi">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <div class="navbar-logo">
        hewo
      </div>

      <div class="navbar-links d-none d-md-flex gap-5"
        style="justify-items: center; justify-content: center; align-items: center; align-content: center;">
        <router-link to="/" exact-active-class="active" class="nav-link">Home</router-link>
        <router-link to="/shop" active-class="active" class="nav-link">About</router-link>
        <router-link to="/books" active-class="active" class="nav-link">Book</router-link>
        <router-link to="/contact" active-class="active" class="nav-link">Contact</router-link>
        <button class="button-new">
          Get Started
        </button>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavigationBar',
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

.button-new {
  background-color: var(--orange);
  padding: 10px 20px;
  border: none;
  color: white;
  font-family: 'Poppins';
  border-radius: 3px;
  font-size: 11px;
}

h1 {
  color: var(--orange);
  font-family: 'Poppins';
}
</style>