<template>
  <div>
    <top-header></top-header>
    <MainImageWithTitle title="버스 예약 시스템"></MainImageWithTitle>
    <main-body></main-body>
    <main-notice></main-notice>
  </div>
</template>

<script>
import TopHeader from '@/organisms/TopHeader.vue';
import MainImageWithTitle from '@/components/MainImageWithTitle.vue';
import MainBody from '@/organisms/MainBody';
import MainNotice from '@/organisms/MainNotice';
export default {
  name: 'MainPage',
  components: {
    TopHeader,
    MainImageWithTitle,
    MainBody,
    MainNotice,
  },
  beforeCreate() {
      if(!this.$store.getters.getToken.accessToken) {
        this.$router.replace('/login')
      }
    }
}
</script>

<style scoped>

</style>