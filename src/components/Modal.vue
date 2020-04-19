<template>
  <transition
    v-bind:css="false"
    appear>
    <div class="modal">
      <div class="inner">
        <button class="close" @click="handleClose">
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'Modal',
    methods: { 
        handleClose () {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
  @import "@/assets/scss/components/_modal.scss";
</style>