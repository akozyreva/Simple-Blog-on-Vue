<template>
    <div>
        <h2>Create new Article</h2>
        <form @submit.prevent="publish">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label for="theme">Select Theme</label>
                <select class="form-control" id="theme" v-model="theme">
                    <option>literature</option>
                    <option>philosophy</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Enter description</label>
                <textarea class="form-control" id="description" rows="15" v-model="description"></textarea>
            </div>
            <div class="submit">
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Publish</button>
            </div>
        </form>
        <app-popup></app-popup>
    </div>
</template>
<script>
import axios from '../axios';
import Popup from './Popup.vue'
import { eventBus } from '../main.js';
export default {
    data() {
        return {
            title: '',
            theme: '',
            description: ''
        }
    },
    components: {
        'app-popup': Popup
    },
    methods: {
        publish() {
            this.$store.dispatch('addArticle', {
                title: this.title,
                theme: this.theme,
                description: this.description
            })
        }
        
    }
}
</script>