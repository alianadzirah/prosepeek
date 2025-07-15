<template>
    <div>
      <headerHome/>
      <BodyHome/>
      <FooterHome/>
    </div>
  </template>
  
  <script>
import headerHome from '@/components/headerHome.vue'
  import BodyHome from '@/components/BodyHome.vue';
  import FooterHome from '@/components/FooterHome.vue';

  export default {
    name: 'MenuPage',
    components: { headerHome, BodyHome, FooterHome, }
  }
  </script>
  