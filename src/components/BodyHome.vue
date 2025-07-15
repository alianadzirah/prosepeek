<template>
    <div class="navi">
        <div class="container-fluid">
            <div class="row" style="align-items: center;">
                <div class="col-lg-6">
                    <h1 class="text-3xl font-bold">Latest</h1>
                </div>
                <div class="col-lg-6" style="text-align: right;">
                    See all ></div>
            </div>
        </div>
        <p>Footer trending and popular artwork here.</p>
    </div>
</template>


<script>
export default {
    name: 'BodyHome',
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

.button-new {
    padding: 10px;
    border: none;
    color: var(--gray);
}

h1 {
    color: var(--orange);
    font-family: 'Poppins';
}
</style>