<template>
    <div class="navi">
        <div class="container-fluid">
            <div class="row" style="align-items: center;">
                <div class="col-2"></div>
                <div class="col-4">
                    <h1 class="text-3xl font-bold">Welcome to Prosepeek!</h1>
                    <p style="color: var(--lightgray);">Browse trending and popular book here.</p>
                    <div class="row gap-3" style="margin-left: 1px">
                        <MainButton @click="doSomething">Find Books</MainButton>
                        <MainButton @click="doSomething">View Profile</MainButton>
                    </div>
                </div>
                <div class="col">
                    <img :src="require('@/assets/images/open-book.png')" alt="Vue logo" width="80%" />
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </div>
</template>


<script>
import MainButton from './Button.vue'

export default {
    name: 'HeaderHome',
    components: { MainButton }
}
</script>

<style scoped>
.navi {
    background-color: var(--sand);
    width: 100%;
    height: 500px;
    justify-items: center;
    align-content: center;
}

.button-new {
    background-color: var(--orange);
    padding: 10px;
    border: none;
    color: white;
    font-size: 11px;
}

h1 {
    color: var(--gray);
    font-family: 'Poppins';
}
</style>