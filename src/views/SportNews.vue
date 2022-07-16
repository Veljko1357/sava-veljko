<template>
    <div>
       
        
        <NewsCard v-for="(article, index) in this.$store.state.newsArticles" :singleArticle="article" :key="index" class="news-card-component"/>
    </div>
</template>

<script>
    import NewsCard from "../components/NewsCard.vue";
  
    export default {
        name: 'SportNews',
        components: {
            NewsCard,
     
        }
    }
</script>


