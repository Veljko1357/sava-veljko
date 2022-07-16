<template>
    <div class="news-card">
        <div class="container">
            <img class="article-img" src="" alt="">
            <h3 class="article-headline"> {{singleArticle.headline}} </h3>
            <p class="article-date"> {{ singleArticle.date }} </p>
            <p class="article-text"> {{ singleArticle.description }} </p>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/scss/style.scss";
</style>

<script>
export default {
    name: 'NewsCard',
      props: {
            singleArticle: Object
        }
}
</script>