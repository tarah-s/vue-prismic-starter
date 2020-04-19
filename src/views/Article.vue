<template>
  <article>
    <header>
      <prismic-image :field="fields.banner"/> 
    </header> 
    <section>
      <small>{{fields.date | moment}}</small>
      <h3>{{ $prismic.richTextAsPlain(fields.title) }}</h3>
      <p><strong>{{ $prismic.richTextAsPlain(fields.subtitle) }}</strong></p>
      <div class="entry-content"> 
        <prismic-rich-text :field="fields.content"/>
      </div>
    </section> 
  </article>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Article',
  data () {
    return {
      documentId: '',
      slices: [],
      article: [],
      fields: {
        banner: null,
        title: null,
        subtitle: null,
        content: null
      }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('D MMMM YYYY');
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('article', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.date = document.first_publication_date
            this.fields.banner = document.data.banner
            this.fields.title = document.data.title
            this.fields.subtitle = document.data.subtitle
            this.fields.content = document.data.content
          }
          else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/_article.scss";
</style>
