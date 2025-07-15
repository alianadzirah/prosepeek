<template>
  <div class="container py-4">
    <!-- Search box -->
    <div class="form-group">
      <input v-model="query" @keyup.enter="fetchBooks(0)" class="form-control" placeholder="Search books..." />
    </div>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <button @click="fetchBooks(0)" class="btn btn-primary">Search</button>

      <div class="form-inline">
        <label class="mr-2">Books per page:</label>
        <select v-model.number="maxResults" class="form-control" @change="fetchBooks(0)">
          <option :value="4">4</option>
          <option :value="8">8</option>
          <option :value="12">12</option>
        </select>
      </div>
    </div>

    <!-- Books Grid -->
    <div class="row">
      <div class="col-md-3 mb-3" v-for="book in books" :key="book.id">
        <!-- <div class="h-100"> -->
        <div class="card-body" v-if="book.volumeInfo">
          <div class="image-box" v-if="book.volumeInfo.imageLinks.thumbnail">
            <img :src="book.volumeInfo.imageLinks.thumbnail" class="images" alt="Dynamic Image" />
          </div>

          <h5 class="card-title">{{ book.volumeInfo.title }}</h5>
          <p class="card-text" v-if="book.volumeInfo.authors">
            By {{ book.volumeInfo.authors.join(', ') }}
          </p>
          <p v-else class="card-text"></p>

          <!--pass data here to individual page-->

        </div>
        <div class="card-footer">
          <!-- <a :href="book.volumeInfo.infoLink" target="_blank" class="btn btn-sm btn-outline-primary">
            View
          </a> -->

          <router-link :to="`/books/${book.volumeInfo.title}/${book.id}`" class="btn btn-sm btn-outline-primary">
            View
          </router-link>
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <button @click="prevPage" class="btn btn-secondary" :disabled="startIndex === 0">Prev</button>
      <span>Page {{ currentPage }}</span>
      <button @click="nextPage" class="btn btn-secondary" :disabled="startIndex + maxResults >= totalItems">
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
      query: '', // default
      books: [],
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
  },
  methods: {
    viewBooks() {
      this.$router.push("/books/");
    },
    fetchBooks(start = 0) {
      const term = this.query.trim() || 'a';
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(term)}&startIndex=${start}&maxResults=${this.maxResults}`;

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
            this.totalItems = 0;
            this.error = 'No results found.';
          }
        })
        .catch(() => {
          this.error = 'Error fetching books.';
        });
    },
    nextPage() {
      const nextIndex = this.startIndex + this.maxResults;
      if (nextIndex < this.totalItems) {
        this.fetchBooks(nextIndex);
      }
    },
    prevPage() {
      const prevIndex = this.startIndex - this.maxResults;
      if (prevIndex >= 0) {
        this.fetchBooks(prevIndex);
      }
    },
  },
  mounted() {
    this.fetchBooks(0);
  },
};
</script>

<style scoped>
.card-title {
  width: 180px;
  /* or any fixed width you need */

  /* Multi-line ellipsis setup */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines */
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

  padding: 20px;
  /* width: 150px; */
  /* height: 200px; */
  background-color: var(--lightsand);
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
