<template>
    <div>
        <h1>More info about article</h1>
        <p>{{ showArticle.title }}</p>
        <p>{{ showArticle.description }}</p>
        <p>{{ showArticle.theme }}</p>
        <button class="btn btn-primary" @click="deleteArticle(id)" data-toggle="modal" data-target="#myModal">Delete article</button>
        <app-popup></app-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import Popup from './Popup.vue';
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.$store.dispatch('getArticle', this.id);
    },
     components: {
        'app-popup': Popup
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