import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Article from './views/Article.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'blog' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: "/blog/:uid",
      name: "article",
      components: {
        blog: Blog,
        article: Article
      },
      meta: {
        showModal: true
      }
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
