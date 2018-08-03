<template>
    <div>
    	 <router-link to="/create" tag="button" active-class="active" class="btn btn-lg pull-right"><a>Create article</a></router-link>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/about" tag="li" active-class="active"><a>About me</a></router-link>
            <router-link to="/articles" tag="li" active-class="active"><a>Articles</a></router-link>
        </ul>

    </div>
</template>