<template>
    <div>
        <div class="container py-4">
            <div class="container-fluid">
                <div class="row" style="align-items: center; padding-top: 20px; padding-bottom: 20px;">
                    <div class="col-lg-6 col-md-6">
                        <h2 class="text-3xl font-bold">My Read List</h2>
                    </div>
                </div>
            </div>
        </div>
        <SearchBooks />
    </div>
</template>

<script>
import SearchBooks from '../searchBooks.vue';

export default {
    name: 'ReadList',
    components: { SearchBooks }
}
</script>

<style scoped>
h2 {
    color: var(--orange);
    font-family: 'Poppins';
}
</style>