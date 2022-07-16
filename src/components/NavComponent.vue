<template>
    <div class="nav">
        
        <router-link to="/">
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
        
    </div>
</template>

<script>
export default {
    name: 'NavComponent'
}
</script>