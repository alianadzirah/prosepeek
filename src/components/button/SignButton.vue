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
    width: 520px;
    height: 100px;
    border: none;
    color: white;
    font-family: 'Poppins';
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.5s ease;
    font-size: 12px;
  }
  
  .sign-button:hover {
    background-color: white;
    color: var(--orange);
  }
  </style>