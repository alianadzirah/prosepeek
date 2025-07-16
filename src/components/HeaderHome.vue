<template>
    <div class="navi">
        <div class="container-fluid">
            <div class="row" style="align-items: center;">
                <div class="col-lg-2"></div>
                <div class="col-lg-4 col-md-6">
                    <h1 class="text-3xl font-bold">Welcome to Prosepeek!</h1>
                    <p style="color: var(--lightgray);">Browse trending and popular book here.</p>
                    <div class="row gap-3" style="margin-left: 1px">
                        <MainButton @click="viewBooks()">Find Books &#x2192;</MainButton>
                        <SubButton @click="username === 'guest' ?  goToSignIn() : goToReadList()">Read list</SubButton>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-none d-md-block">
                    <img :src="require('@/assets/images/open-book.png')" alt="Prosepeek" width="80%" />
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    </div>
</template>


<script>
import MainButton from './button/mainButton.vue'
import SubButton from './button/subButton.vue'

export default {
    name: 'headerHome',
    components: { MainButton, SubButton },
    data() {
        return {
            username: 'guest'
        }
    },
    methods: {
        viewBooks() {
            this.$router.push("/books");
        },
        goToReadList() {
            this.$router.push("/readlist");
        },
        goToSignIn() {
            this.$router.push("/signin");
        },
    },
    mounted() {
        this.username = sessionStorage.getItem('username') === null ? 'guest' : sessionStorage.getItem('username')
    }
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