<template>
    <button class="button-new" @click="$emit('click')">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'BaseButton',
  }
  </script>
  
  <style scoped>
  .button-new {
    background-color: var(--orange);
    padding: 10px 20px;
    width: 120px;
    border: none;
    color: white;
    font-family: 'Poppins';
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .button-new:hover {
    background-color: #e36c1f; /* slightly darker orange */
  }
  </style>
  