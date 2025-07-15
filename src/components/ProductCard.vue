<template>
    <div class="bg-white shadow rounded-xl p-4 text-center hover:shadow-lg transition">
      <img :src="image" alt="" class="mb-4 w-full h-48 object-cover rounded-lg" />
      <h3 class="font-semibold text-lg mb-1">{{ title }}</h3>
      <p class="text-orange-500 font-bold">{{ price }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    price: String,
    image: String,
  })
  </script>
  