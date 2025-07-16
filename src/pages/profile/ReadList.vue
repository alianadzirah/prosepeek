<template>
    <div class="container py-4">
        <div class="row" style="align-items: center; padding-top: 20px; padding-bottom: 20px;">
            <div class="col-lg-6 col-md-6">
                <h2 class="text-3xl font-bold">My Read List</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 mb-3 col-sm-4" v-for="book in books" :key="book.id">
                <BookCard :book="book" :username="username" />
            </div>
            <p v-if="books.length === 0">
                no reading list yet...
            </p>
        </div>
    </div>
</template>

<script>
import BookCard from '@/components/bookCard.vue';

export default {
    name: 'ReadList',
    components: { BookCard },
    data() {
        return {
            query: '',
            searchBy: 'title',
            books: [],
            savedBooks: [],
            startIndex: 0,
            maxResults: 8,
            totalItems: 0,
            error: '',
            loading: false,
            username: sessionStorage.getItem('username') === null || sessionStorage.getItem('username') === 'guest' ? 'guest' : sessionStorage.getItem('username'),
            showDropdown: false
        };
    },
    computed: {
        currentPage() {
            return Math.floor(this.startIndex / this.maxResults) + 1;
        },
        totalPages() {
            return Math.ceil(this.totalItems / this.maxResults);
        },
    },
    methods: {
        selectSearchBy(option) {
            this.searchBy = option;
            this.showDropdown = false;
        },
        viewBooks() {
            this.$router.push("/books");
        },
        getBookList() {
            this.books = this.readList;
        },
    },
    mounted() {
        this.getBookList();
    },
};
</script>

<style scoped>
h2 {
    color: var(--orange);
    font-family: 'Poppins';
}

.btn.btn-primary {
    background-color: var(--orange);
    border: none;
    font-family: 'Poppins';
}

.btn.btn-outline-secondary {
    border-color: var(--orange);
    color: var(--orange);
    background-color: transparent;
    font-family: 'Poppins';
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.btn.btn-outline-secondary:hover {
    background-color: var(--orange);
    color: white;
}
</style>
