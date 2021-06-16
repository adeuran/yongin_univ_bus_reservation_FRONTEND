<template>
  <div>
      <button-with-icon class="margin" icon="calendar-week" text="버스예약" @btn-clicked="reservationBtn"></button-with-icon>
      <button-with-icon class="margin" icon="credit-card" text="포인트" @btn-clicked="pointBtn"></button-with-icon>
      <button-with-icon class="margin" icon="layout-text-sidebar-reverse" text="예약조회" @btn-clicked="reservationHistoryBtn"></button-with-icon>
      <button-with-icon class="margin" icon="chat-square-dots" text="공지사항" @btn-clicked="noticeBtn"></button-with-icon>
  </div>
</template>

<script>
import ButtonWithIcon from '@/components/buttonWithIcon';
export default {
    name:'FourButtonWithIcon',
    components: {
        ButtonWithIcon,
    },
    methods: {
        reservationBtn(e) {
            this.$router.push('/reservation');
        },
        pointBtn(e) {

        },
        reservationHistoryBtn(e) {

        },
        noticeBtn(e) {
            window.open("https://m.yongin.ac.kr/cmn/m/board/SYSTEM_DEFAULT000001/noticeList.do","_blank"); // 새창에서 열림
        },
    }
}
</script>

<style scoped>
    .margin {
        margin: 10px;
    }
</style>