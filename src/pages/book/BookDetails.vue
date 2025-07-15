<template>
    <div class="container py-4">
      <h2>Book Detail</h2>
      <div v-if="book">
        <h3>{{ book.volumeInfo.title }}</h3>
        <p v-if="book.volumeInfo.authors">
          <strong>Authors:</strong> {{ book.volumeInfo.authors.join(', ') }}
        </p>
        <p v-if="book.volumeInfo.description" v-html="book.volumeInfo.description"></p>
        <a :href="book.volumeInfo.infoLink" target="_blank" class="btn btn-primary">More Info</a>
      </div>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: null,
      };
    },
    mounted() {
      const id = this.$route.params.id;
      fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => res.json())
        .then(data => {
          this.book = data;
        })
        .catch(() => {
          this.book = null;
        });
    },
  };
  </script>
  