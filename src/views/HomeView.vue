<template>
    <div>
        <div id="landing">
            <div class="overlay">
            <img class="main-bg" src="@/assets/main-bg.jpg" alt="main backgroud image">
        </div>
        <nav>
          <router-link to="/" v-if="!stateOne">
            <div class="nav-btn">
              <span>Home</span>
            </div>
            </router-link>
            <router-link to="/sports-news">
            <div class="nav-btn">
                <span>Sports News</span>
            </div>
            </router-link>
            <router-link to="/regular-news">
            <div class="nav-btn">
                <span>Regular News</span>
            </div>
            </router-link>
        <router-view/>
        </nav>
        </div>
    </div>
</template>

<style lang="scss">
@import "../style/scss/style.scss";
@import "../style/scss/home.scss";
</style>

<script>

export default {
    name: 'HomeView',
    data(){
       return {
        stateOne: true
       }
    }
}

</script>