<template>
    <button class="sub-button" @click="$emit('click')">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'SubButton',
}
</script>

<style scoped>
.sub-button {
    background-color: white;
    color: var(--orange);
    padding: 10px 20px;
    width: 120px;
    border: none;
    font-family: 'Poppins';
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 12px;
}

.sub-button:hover {
    background-color: var(--orange);
    color: white;
}
</style>