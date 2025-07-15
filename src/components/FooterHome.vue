<template>
    <div class="navi">
        <h1 class="text-3xl font-bold">Welcome to the Art World!</h1>
        <p>Footer trending and popular artwork here.</p>
    </div>
</template>


<script>
export default {
    name: 'HeaderHome',
}
</script>

<style scoped>
.navi {
    /* padding: 16px 24px; */
    height: 500px;
    justify-items: center;
    align-content: center;
}

.button-new {
    padding: 10px;
    border: none;
    color: var(--gray);
}

h1 {
    color: var(--orange);
    font-family: 'Poppins';
}
</style>