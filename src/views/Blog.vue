<template>
  <section class="section"> 
    <div class="section__header">
      <h2>Articles</h2>
    </div> 
    <Articles/> 
  </section> 
</template>

<script>
import Articles from '../components/Articles.vue'
export default {
  name: "Blog",
  components: {
    Articles
  }
}
</script>
<style lang="scss" scoped>
</style>



