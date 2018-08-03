<template>
    <div>
        <h1>More info about article</h1>
        <p>{{ showArticle.title }}</p>
        <p>{{ showArticle.description }}</p>
        <p>{{ showArticle.theme }}</p>
        <button class="btn btn-primary" @click="deleteArticle(id)">Delete article</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.$store.dispatch('getArticle', this.id);
    },
    computed: {
    	...mapGetters(['showArticle'])
    },
    methods: {
        ...mapActions(
            ['deleteArticle']
        )
    }

   	
}
</script>
<style>
</style>