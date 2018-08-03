<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div>
                    <h1>Blog</h1>
                    <hr>
                    <app-header></app-header>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>
<style>

</style>