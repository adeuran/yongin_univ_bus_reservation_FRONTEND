<template>
  <div>
    <top-header></top-header>
    <station-edit
    class = "pc"
    :headMessage="headMessage"
    :contextMessage="contextMessage"
    ></station-edit>
  </div>
</template>

<script>
import TopHeader from '@/organisms/TopHeader';
import StationEdit from '@/organisms/StationEdit';
export default {
  components: { 
    TopHeader,
    StationEdit,
  },
  data() {
    return {
      headMessage: "정류장 추가",
      contextMessage: "새로운 정류장을 추가합니다.",
    }
}  

}
</script>

<style scoped>
  .pc {
     width:960px;
    display: block;
    text-align: left;
    margin:20px auto; 
  }
</style>