<template>
    <div class="footer">
        <p>prosepeek © 2025</p>
    </div>
</template>


<script>
export default {
    name: 'headerHome',
}
</script>

<style scoped>
.footer {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

p {
    color: var(--orange);
    font-family: 'Poppins';
}
</style>