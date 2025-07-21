<template>
    <div v-if="book.volumeInfo">
        <div class="card-body">
            <router-link :to="`/books/${book.volumeInfo.title}/${book.id}`"
                style="text-decoration: none; color: var(--gray)">
                <div class="image-box" v-if="book.volumeInfo.imageLinks?.thumbnail">
                    <img :src="book.volumeInfo.imageLinks.thumbnail" class="images img-fluid" alt="Book Thumbnail" />
                </div>
                <div class="image-box" v-else-if="book.volumeInfo.imageLinks?.thumbnail == '' || book.volumeInfo.imageLinks?.thumbnail == null">
                    <img :src="require('@/assets/images/no-image.jpg')" class="images img-fluid" alt="Book Thumbnail" />
                </div>
            </router-link>
            <h5 class="card-title">{{ book.volumeInfo.title }}</h5>
            <p class="card-text" v-if="book.volumeInfo.authors">
                By {{ book.volumeInfo.authors.join(', ') }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        book: {
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>
.card-title {
    width: 90%;
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

.card-text {
    width: 80%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;
    font-family: 'Poppins';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    padding-bottom: 10px;
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
    justify-self: center;
    position: relative;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    padding: 20px;
    background-color: var(--oat);
    transition: background-color 0.6s ease;
}

.image-box:hover {
    position: relative;
    padding: 20px;
    background-color: var(--orange);
}

.images {
    align-items: center;
    align-self: center;
    width: 150px;
    height: 200px;
    border: 2px solid var(--orange)
}
</style>