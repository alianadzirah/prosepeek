<template>
  <div class="container py-4">
    <div class="form-group mb-4">
      <div class="input-group mb-2">
        <input v-model="query" @keyup.enter="getBookList(0)" class="form-control"
          style="font-family: 'Poppins'; padding: 15px; border-top-left-radius: 20px; border-bottom-left-radius: 20px;"
          placeholder="Search books..." />
        <button @click="getBookList(0)" class="btn btn-primary"
          style="padding: 15px; border-top-right-radius: 20px; border-bottom-right-radius: 20px;">
          <i class="fas fa-search me-1"></i> Search
        </button>
        &nbsp;
        &nbsp;
        <div class="form-group mt-2 position-relative d-flex align-items-center gap-2">
          <i class="fas fa-sliders-h" @click="showDropdown = !showDropdown"
            style="cursor: pointer; font-size: 30px;"></i>
          <div v-if="showDropdown" class="dropdown-menu show p-0"
            style="position: absolute; top: 100%; right: 0; z-index: 1000; font-family: 'Poppins'; min-width: 120px;">
            <button class="dropdown-item" @click="selectSearchBy('title')">Title</button>
            <button class="dropdown-item" @click="selectSearchBy('author')">Author</button>
            <button class="dropdown-item" @click="selectSearchBy('genre')">Genre</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="row" style="justify-self: center;">
      <LoadingIcon />
    </div>
    <div v-else class="row">
      <div class="col-md-3 mb-3 col-sm-4" v-for="book in books" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-4 gap-3 text-center text-md-start">
      <div class="d-flex flex-column flex-sm-row align-items-center gap-2">
        <label for="maxResults" class="mb-0 fw-semibold" style="font-family: 'Poppins';">
          Books per page:
        </label>
        <select v-model.number="maxResults" id="maxResults" class="form-select w-auto" @change="onMaxResultsChange">
          <option :value="4">4</option>
          <option :value="8">8</option>
          <option :value="12">12</option>
        </select>
      </div>

      <div class="d-flex align-items-center justify-content-center gap-3">
        <button @click="prevPage" class="btn btn-outline-secondary" :disabled="startIndex === 0">
          <i class="bi bi-chevron-left"></i> Prev
        </button>
        <span class="fw-semibold">
          {{ currentPage }} / {{ totalPages }}
        </span>
        <button @click="nextPage" class="btn btn-outline-secondary" :disabled="startIndex + maxResults >= totalItems">
          Next <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>

    <p v-if="error" class="text-danger mt-3" style="font-family: 'Poppins';">{{ error }}</p>
  </div>
</template>

<script>
import { getBookList } from '@/components/datastore/bookStore';
import BookCard from '@/components/bookCard.vue';
import LoadingIcon from '../components/loadingIcon.vue'

export default {
  name: 'SearchBooks',
  components: { BookCard, LoadingIcon },
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
    onMaxResultsChange() {
      this.$nextTick(() => {
        this.getBookList(0);
      });
    },
    viewBooks() {
      this.$router.push("/books");
    },
    async getBookList(start = 0) {
      this.loading = true;
      try {
        const term = this.query.trim() || 'a';

        const result = await getBookList({
          query: term,
          start,
          maxResults: this.maxResults,
        });

        this.books = result.books;
        this.totalItems = result.totalItems;
        this.startIndex = start;
        this.error = result.error;
      } catch (e) {
        this.error = e.message || 'Unknown error';
        this.books = [];
        this.totalItems = 0;
      } finally {
        this.loading = false;
      }
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
