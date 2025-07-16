<template>
    <div>
      <headerHome/>
      <BodyHome/>
      <FooterHome/>
    </div>
  </template>
  
  <script>
import headerHome from '@/components/headerHome.vue'
  import BodyHome from '@/components/bodyHome.vue';
  import FooterHome from '@/components/footerHome.vue';

  export default {
    name: 'MenuPage',
    components: { headerHome, BodyHome, FooterHome, }
  }
  </script>
  