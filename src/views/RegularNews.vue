<template>
    <NavComponent/>
    <div>
        <NewsCard v-for="(article, index) in this.$store.state.newsArticles" :singleArticle="article" :key="index" class="news-card-component"/>  
    </div>
</template>

<style lang="scss">

@import "../style/scss/navigation.scss"
</style>

<script>
    import NewsCard from "../components/NewsCard.vue";
    import NavComponent from "../components/NavComponent.vue";
    export default {
        name: 'RegularNews',
        components: {
            NewsCard,
            NavComponent
        }
    }
</script>


