<template>
    <div class="container py-4">
        <div class="container-fluid">
            <div class="row" style="align-items: center; padding-top: 20px; padding-bottom: 20px;">
                <div class="col-lg-6 col-md-6">
                    <h2 class="text-3xl font-bold">Latest</h2>
                </div>
                <div class="col-lg-6 col-md-6">
                    <p @click="viewBooks()" class="link">See all &gt;</p>
                </div>
            </div>
        </div>
        <div v-if="latestLoading" class="row" style="justify-self: center;">
            <LoadingIcon />
        </div>
        <div v-else class="row">
            <div class="col-md-3 mb-3 col-sm-4" v-for="book in latestBooks" :key="book.id">
                <BookCard :book="book" :username="username"/>
            </div>
        </div>
        <div class="container-fluid" style="padding-top: 50px;">
            <div class="row" style="align-items: center; padding-top: 20px; padding-bottom: 20px;">
                <div class="col-lg-6 col-md-6">
                    <h2 class="text-3xl font-bold">Trending</h2>
                </div>
                <div class="col-lg-6 col-md-6">
                    <p @click="viewBooks()" class="link">See all &gt;</p>
                </div>
            </div>
        </div>
        <div v-if="trendingLoading" class="row" style="justify-self: center;">
            <LoadingIcon />
        </div>
        <div v-else class="row">
            <div class="col-md-3 mb-3 col-sm-4" v-for="book in trendingBooks" :key="book.id">
                <BookCard :book="book" :username="username"/>
            </div>
        </div>
    </div>
</template>

<script>
import { getLatestBook, getTrendingBook } from './datastore/bookStore';
import BookCard from './bookCard.vue';
import LoadingIcon from './loadingIcon.vue';

export default {
    name: 'BodyHome',
    components: { BookCard, LoadingIcon },
    data() {
        return {
            latestBooks: [],
            latestError: '',
            latestLoading: false,
            trendingBooks: [],
            trendingError: '',
            trendingLoading: false,
            username: sessionStorage.getItem('username') === null || sessionStorage.getItem('username') === 'guest' ? 'guest' : sessionStorage.getItem('username')
        };
    },
    methods: {
        viewBooks() {
            this.$router.push("/books");
        },
        async getLatestBookList() {
            this.latestLoading = true;
            try {
                const result = await getLatestBook();
                this.latestBooks = result.books;
                this.latestError = result.error;
            } catch (e) {
                this.latestError = e.message || 'Unknown error';
                this.latestBooks = [];
            } finally {
                this.latestLoading = false;
            }
        },
        async getTrendingBookList() {
            this.trendingLoading = true;
            try {
                const result = await getTrendingBook();
                this.trendingBooks = result.books;
                this.trendingError = result.error;
            } catch (e) {
                this.trendingError = e.message || 'Unknown error';
                this.trendingBooks = [];
            } finally {
                this.trendingLoading = false;
            }
        }
    },
    async mounted() {
        this.getLatestBookList();
        this.getTrendingBookList();
    }
}
</script>

<style scoped>
.navi {
    margin: 80px;
    margin-left: 120px;
    margin-right: 120px;
    height: 500px;
    justify-items: center;
}

h2 {
    color: var(--orange);
    font-family: 'Poppins';
}

.link {
    font-family: 'Poppins';
    text-align: right;
    cursor: pointer;
}

.card-title {
    width: 180px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-family: 'Poppins';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 10px;
}

.card-body {
    align-items: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
}

.card-footer {
    align-items: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    justify-self: center;
}

.image-box {
    position: relative;

    padding: 20px;
    background-color: var(--oat);
}

.images {
    align-items: center;
    align-self: center;
    width: 150px;
    height: 200px;
    border: 2px solid var(--orange)
}

.card-text {
    height: 30px;
}
</style>