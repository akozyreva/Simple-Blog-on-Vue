import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        data: [],
        article: {}
    },
    mutations: {
        'ADD_ARTICLE' (state, newArticle) {
            state.data.push({
                title: newArticle.title,
                theme: newArticle.theme,
                description: newArticle.description,
                id: newArticle.id
            })
        },
        'DELETE_ARTICLE' (state, id) {
            state.data.splice(
                state.data.indexOf(id), 1
            )
            console.log('final state', state.data)
        },
        'GET_ARTICLES' (state, articles) {
            let resData = Object.keys(articles).length;
            //compare length of new array and new state
            if (state.data.length != resData) {
                for (let i in articles) {
                    state.data.push({
                        title: articles[i].title,
                        theme: articles[i].theme,
                        description: articles[i].description,
                        id: i
                    })
                }
            }

            console.log('final state', state.data)
        },
        'GET_ARTICLE' (state, article) {
            state.article = {};
            state.article = {
                title: article.title,
                theme: article.theme,
                description: article.description
            };

            console.log('final state of artcile', state.article)
        }
    },
    actions: {
        addArticle: ({ commit }, article) => {
            const formData = {
                title: article.title,
                theme: article.theme,
                description: article.description,

            }
            console.log(article)
            axios.post('', article)
                .then(res => {
                    article.id = res.data.name;
                    commit('ADD_ARTICLE', article)
                })
                .catch(er => console.log(er))

        },
        getArticles: ({ commit }) => {
            axios.get()
                .then(res => {
                    commit('GET_ARTICLES', res.data)
                })
                .catch(er => console.log(er));
        },
        getArticle: ({ commit }, id) => {
            axios.get('https://blog-9734f.firebaseio.com/blog/' + id + '.json')
                .then(res => {
                    commit('GET_ARTICLE', res.data)
                })
                .catch(er => console.log(er));
        },
        deleteArticle: ({ commit }, id) => {
            axios.delete('https://blog-9734f.firebaseio.com/blog/' + id + '.json')
                .then(res => {
                    commit('DELETE_ARTICLE', id)
                })
                .catch(er => console.log(er));

        }
    },
    getters: {
        countsArticle: state => {
            return state.data.length;
        },
        showArticle: state => {
            return {
                title: state.article.title,
                description: state.article.description,
                theme: state.article.theme
            }
        }
    }
})