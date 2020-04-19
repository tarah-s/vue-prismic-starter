<template>
  <div id="app" class="container">
    <Header>
     <h1>Vue Prismic Starter</h1>
     <p>Ready-made starting point for vue and prismic blog using modal with custom router url</p>
    </header>
    <main class="main">
      <router-view/>  
      <router-view name="blog"/>
    </main>
    <Footer/>
    <modal v-if="showModal" ref="modal">
      <router-view name="article"/>
    </modal>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Modal
  },
  data() {
    return {
      prompt: false,
      showModal: this.$route.meta.showModal
    };
  },
  watch: {
    '$route.meta' ({showModal}) {
      this.showModal = showModal
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/scss/styles.scss";
</style>