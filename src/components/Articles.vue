<template>
  <div>
    <div v-if="articles.length !== 0">
      <article v-for="article in articles" :key="article.id" v-bind:post="article">
          <header>
            <img :src="article.data.banner.url">
            <div> 
              <small>{{article.first_publication_date | moment}}</small>
              <h3>{{ $prismic.richTextAsPlain(article.data.title) }}</h3>
              <p><strong>{{ $prismic.richTextAsPlain(article.data.subtitle) }}</strong></p>
              <p>{{ article.data.content[0].text }}</p>
              <router-link :to="'/blog/' + article.uid">Read more</router-link> 
            </div>
          </header> 
      </article> 
    </div>
    <div v-else>
      <p>No Posts published at this time.</p>
    </div> 
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    name: 'Articles',
    data () {
      return {
        articles: [],
        isLoading: true,
        dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
        linkResolver: this.$prismic.linkResolver
      }
    },
    filters: {
      moment: function (date) {
        return moment(date).format('D MMMM YYYY');
      }
    },
    methods: {
      getArticles () {
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'article'),
          { orderings : '[my.article.date desc]' }
        ).then((response) => {
          this.isLoading = false
          this.articles = response.results;
        })
      }
    },
    created () {
      this.getArticles();
    }
  }
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/elements/_entry-content.scss";
  @import "@/assets/scss/components/_article.scss";
</style>
