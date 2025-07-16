<template>
    <button class="sign-button" @click="$emit('click')">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'SignButton',
  }
  </script>
  
  <style scoped>
  .sign-button {
    background-color: var(--orange);
    width: 100%;
    height: 50px;
    border: none;
    color: white;
    font-family: 'Poppins';
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }
  
  .sign-button:hover {
    background-color: var(--oat);
    color: var(--orange);
  }
  </style>