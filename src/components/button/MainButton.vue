<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    class="main-button"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: '_self',
    },
  },
};
</script>

<style scoped>
.main-button {
  background-color: var(--orange);
  padding: 10px 20px;
  width: 120px;
  border: none;
  color: white;
  font-family: 'Poppins';
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
}

.main-button:hover {
  background-color: white;
  color: var(--orange);
}
</style>
