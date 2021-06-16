<template>
  <div class="img">
    <h1 class="text bold">{{title}}</h1>
    <h5 class="text">하단 메뉴를 선택하세요</h5>
  </div>
</template>

<script>
export default {
  name: 'MainBackgroundImage',
  props: {
    title: String,
  }
}
</script>

<style scoped>
  .img {
    width: 100%;
    background-image: url("../assets/images/main_background.png");
    height: 36vh;
    background-repeat : no-repeat;
    background-size : cover;
    background-position: right;
  }
  .text {
    color: white;
    text-align: center;
    padding-top: 10vh;
  }
  .bold {
    font-weight: bold;
  }
</style>