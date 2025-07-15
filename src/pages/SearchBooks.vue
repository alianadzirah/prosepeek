<template>
  <div class="container py-4">
    <div class="form-group">
      <input v-model="query" @keyup.enter="getBookList(0)" class="form-control" placeholder="Search books..." />
      <div class="d-flex justify-content-between align-items-center mb-3">
        <button @click="getBookList(0)" class="btn btn-primary">Search</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 mb-3 col-sm-4" v-for="book in books" :key="book.id">
        <BookCard :book="book" :isBookmarked="isBookmarked" :toggleBookmark="toggleBookmark" />
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-3">
      <div class="d-flex align-items-center gap-2">
        <label for="maxResults" class="mb-0 fw-semibold" style="font-family: 'Poppins';">Books per page:</label>
        <select v-model.number="maxResults" id="maxResults" class="form-select w-auto" @change="onMaxResultsChange">
          <option :value="4">4</option>
          <option :value="8">8</option>
          <option :value="12">12</option>
        </select>
      </div>

      <div class="d-flex align-items-center gap-3">
        <button @click="prevPage" class="btn btn-outline-secondary" :disabled="startIndex === 0">
          <i class="bi bi-chevron-left"></i>Prev
        </button>
        <span class="fw-semibold">
          {{ currentPage }} / {{ totalPages }}
        </span>
        <button @click="nextPage" class="btn btn-outline-secondary" :disabled="startIndex + maxResults >= totalItems">
          Next<i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>

    <p v-if="error" class="text-danger mt-3" style="font-family: 'Poppins';">{{ error }}</p>
  </div>
</template>

<script>
import { getBookList } from '@/components/datastore/bookStore';
import BookCard from '@/components/BookCard.vue';

export default {
  name: 'SearchBooks',
  components: { BookCard },
  data() {
    return {
      query: '',
      books: [],
      savedBooks: [],
      startIndex: 0,
      maxResults: 8,
      totalItems: 0,
      error: '',
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
    onMaxResultsChange() {
      this.$nextTick(() => {
        this.getBookList(0);
      });
    }
    ,
    toggleBookmark(book) {
      const index = this.savedBooks.findIndex(saved => saved.id === book.id);
      if (index !== -1) {
        this.savedBooks.splice(index, 1);
      } else {
        this.savedBooks.push(book);
      }
      localStorage.setItem('savedBooks', JSON.stringify(this.savedBooks));
    },
    isBookmarked(book) {
      return this.savedBooks.some(saved => saved.id === book.id);
    },

    loadBookmarks() {
      const saved = localStorage.getItem('savedBooks');
      if (saved) {
        this.savedBooks = JSON.parse(saved);
      }
    },
    viewBooks() {
      this.$router.push("/books");
    },
    async getBookList(start = 0) {
      const token = this.authToken;
      const term = this.query.trim() || 'a';

      const result = await getBookList({
        token,
        query: term,
        start,
        maxResults: this.maxResults,
      });

      this.books = result.books;
      this.totalItems = result.totalItems;
      this.startIndex = start;
      this.error = result.error;
    },

    nextPage() {
      const nextIndex = this.startIndex + this.maxResults;
      if (nextIndex < this.totalItems) {
        this.getBookList(nextIndex);
      }
    },

    prevPage() {
      const prevIndex = this.startIndex - this.maxResults;
      if (prevIndex >= 0) {
        this.getBookList(prevIndex);
      }
    }
  },
  mounted() {
    this.getBookList(0);
  },
};
</script>

<style scoped>
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
