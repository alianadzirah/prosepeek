<template>
    <div class="container py-4">
      <h2>Newest Books</h2>
  
      <!-- Grid display -->
      <div class="row">
        <div class="col-md-4 mb-4" v-for="book in books" :key="book.id">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ book.volumeInfo.title }}</h5>
              <p class="card-text" v-if="book.volumeInfo.authors">
                By {{ book.volumeInfo.authors.join(', ') }}
              </p>
              <a
                :href="book.volumeInfo.infoLink"
                target="_blank"
                class="btn btn-sm btn-outline-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Optional Pagination -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <button @click="prevPage" class="btn btn-secondary" :disabled="startIndex === 0">Prev</button>
        <span>Page {{ currentPage }}</span>
        <button
          @click="nextPage"
          class="btn btn-secondary"
          :disabled="startIndex + maxResults >= totalItems"
        >
          Next
        </button>
      </div>
  
      <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [],
        startIndex: 0,
        maxResults: 9,
        totalItems: 0,
        error: '',
      };
    },
    computed: {
      currentPage() {
        return Math.floor(this.startIndex / this.maxResults) + 1;
      },
    },
    methods: {
      fetchNewestBooks(start = 0) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=a&orderBy=newest&startIndex=${start}&maxResults=${this.maxResults}`;
  
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if (data.items) {
              this.books = data.items;
              this.totalItems = data.totalItems;
              this.startIndex = start;
              this.error = '';
            } else {
              this.books = [];
              this.error = 'No books found.';
            }
          })
          .catch(() => {
            this.error = 'Error fetching books.';
          });
      },
      nextPage() {
        const next = this.startIndex + this.maxResults;
        if (next < this.totalItems) {
          this.fetchNewestBooks(next);
        }
      },
      prevPage() {
        const prev = this.startIndex - this.maxResults;
        if (prev >= 0) {
          this.fetchNewestBooks(prev);
        }
      },
    },
    mounted() {
      this.fetchNewestBooks(0);
    },
  };
  </script>
  
  <style scoped>
  .card-title {
    font-size: 1rem;
  }
  </style>
  