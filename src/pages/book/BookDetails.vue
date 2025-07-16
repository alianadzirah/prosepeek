<template>
    <div class="container py-4" style="margin-bottom: 100px;">
        <span @click="$router.go(-1)" style="cursor: pointer; font-family: 'Poppins';">&#x2190; Back</span>
        <div v-if="book">
            <div class="col-lg-4 col-md-4 col-mb-6 col-sm-12" style="margin: 30px; justify-self: center;">
                <img :src="book.volumeInfo.imageLinks.thumbnail" width="100%" alt="Dynamic Image" />
            </div>

            <h3>{{ book.volumeInfo.title }}</h3>
            <p v-if="book.volumeInfo.authors">
                <strong>Authors:</strong> {{ book.volumeInfo.authors.join(', ') }}
            </p>
            <p style="margin: 10px;" v-if="book.volumeInfo.description" v-html="book.volumeInfo.description"></p>

            <div class="row" style="justify-content: flex-end;">
                <!-- <i class="fas fa-bookmark bookmark-icon bookmarker" v-if="username !== 'guest'" @click="addBook(book)"
                    style=""></i> -->
                <i :class="['bookmarker', 'bookmark-icon', isBookInReadList(book) ? 'fas' : 'far', 'fa-bookmark']"
                    v-if="username !== 'guest'" @click="addBook(book)">
                </i>

                &nbsp;
                <MainButton :href="book.volumeInfo.infoLink" target="_blank" style="float: right;">More Info
                </MainButton>
            </div>

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
            username: sessionStorage.getItem('username') === null || sessionStorage.getItem('username') === 'guest' ? 'guest' : sessionStorage.getItem('username')
        };
    },
    methods: {
        viewBooks() {
            this.$router.push("/books");
        },
        addBook(book) {
            const index = this.readList.findIndex(b => b.id === book.id);

            if (index === -1) {
                this.readList.push(book);
            } else {
                this.readList.splice(index, 1);
            }

            console.log(this.readList)
        },
        isBookInReadList(book) {
            return this.readList.some(b => b.id === book.id);
        }
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

.bookmarker {
    font-size: 30px;
    background-color: transparent;
    width: 50px;
    color: var(--orange);
    cursor: pointer;
    text-align: center;
    display: inline-block;
    align-content: center;
    text-decoration: none;
}
</style>