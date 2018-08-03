<template>
    <div>
        <h1>Articles</h1>
        <div class="col-xs-8">
            <h3>All articles: {{ counter }}</h3>
            <div v-for="(article,index) in data">
                <h2>{{ article.title }}</h2>
                <p class="theme">{{ article.theme }}</p>
                <p> {{ article.description}}</p>
                <router-link tag="button" v-bind:to="`/articles/${article.id}`" class="btn btn-primary">Read more</router-link>
                <button class="btn btn-primary" @click="deleteArticle(article.id)">Delete article</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from '../axios';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            data: this.$store.state.data
        }
    },
    computed: {
        counter() {
            return this.$store.getters.countsArticle;
        }
    },
    created() {
        this.$store.dispatch('getArticles');
    },
    methods: {
        ...mapActions(
            ['deleteArticle']
        )
    }
}
</script>
<style scoped>
.theme {
    float: right;
}
</style>