<template>
  <white-text-with-gray-box class="bottom" :text="notice" :link="link"></white-text-with-gray-box>
</template>

<script>
import WhiteTextWithGrayBox from '@/molecules/WhiteTextWithGrayBox.vue'
export default {
  name: 'MainNotice',
  components: { 
    WhiteTextWithGrayBox 
  },
  data() {
    return {
      notice: "[학생통학버스 운행 변경사항] 2021학년도 1학기 학생통학버스 서울 및 광역권 운영 노선 안내<시행일시: 2021년 6월 7일(월) ~ 6월 16일(수)까지>",
      link: "https://m.yongin.ac.kr/cmn/m/board/SYSTEM_DEFAULT000001/4002noticeDetail.do",
    }
  }
}
</script>

<style scoped>
  .bottom {
    bottom: 0;
    position: fixed;
    }
</style>