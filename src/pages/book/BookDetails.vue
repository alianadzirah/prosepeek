<template>
    <div class="container py-4" style="margin-bottom: 100px;">
        <span @click="viewBooks()" style="cursor: pointer; font-family: 'Poppins';">&#x2190; Back to list</span>
        <div v-if="book">
            <div class="col-lg-4 col-md-4 col-mb-6 col-sm-12" style="margin: 30px; justify-self: center;">
                <img :src="book.volumeInfo.imageLinks.thumbnail" width="100%" alt="Dynamic Image" />
            </div>

            <h3>{{ book.volumeInfo.title }}</h3>
            <p v-if="book.volumeInfo.authors">
                <strong>Authors:</strong> {{ book.volumeInfo.authors.join(', ') }}
            </p>
            <p style="margin: 10px;" v-if="book.volumeInfo.description" v-html="book.volumeInfo.description"></p>
            <MainButton :href="book.volumeInfo.infoLink" target="_blank" style="float: right;">More Info</MainButton>
        </div>
        <div v-else class="col" style="justify-items: center;">
            <LoadingIcon />
        </div>

    </div>
</template>

<script>
import { getBookDetail } from '@/components/datastore/bookStore';
import MainButton from '@/components/button/mainButton.vue';
import LoadingIcon from '@/components/loadingIcon.vue';

export default {
    name: 'BookDetails',
    components: { MainButton, LoadingIcon },
    data() {
        return {
            book: null,
            error: '',
        };
    },
    methods: {
        viewBooks() {
            this.$router.push("/books");
        },
    },
    async mounted() {
        const id = this.$route.params.id;

        const { book, error } = await getBookDetail(id);

        this.book = book;
        this.error = error;

        if (error) {
            console.warn('Book detail error:', error);
        }
    }
};
</script>

<style scoped>
h3,
p {
    font-family: 'Poppins';
}
</style>