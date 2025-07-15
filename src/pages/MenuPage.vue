<template>
    <div>
      <HeaderHome/>
      <BodyHome/>
      <FooterHome/>
    </div>
  </template>
  
  <script>
  import HeaderHome from '@/components/HeaderHome.vue';
  import BodyHome from '@/components/BodyHome.vue';
  import FooterHome from '@/components/FooterHome.vue';

  export default {
    name: 'MenuPage',
    components: { HeaderHome, BodyHome, FooterHome, }
  }
  </script>
  