<template>
  <div class="pc">
    <body-head-message class="blocker" headMessage="정류장" contextMessage="노선에 사용되는 정류장 목록입니다. 정류장은 삭제할 수 없습니다."></body-head-message>
    <div class="btn">
      <button-blue message="정류장 추가" @btn-clicked="addBtnClick"></button-blue>
    </div>
    <table-with-a-button BtnName="수정" :items="listItems" :fields="listFields" @click="tableBtnClick"></table-with-a-button>
  </div>
</template>

<script>
import TableWithAButton from '@/molecules/TableWithAButton'
import ButtonBlue from '@/components/ButtonBlue'
import BodyHeadMessage from '@/molecules/BodyHeadMessage'
export default {
  components: {
    TableWithAButton,
    ButtonBlue,
    BodyHeadMessage,
   },
   props: {
    listFields: Array,
    listItems: Array,    
  },
  methods: {
    tableBtnClick(item, index) {
      this.$emit('table-btn-click', item, index);
    },
    addBtnClick(e) {
      this.$emit('add-btn-click',e);
    },
  },
}
</script>

<style scoped>
  .pc {
    width:960px;
    display: block;
    text-align: left;
    margin:20px auto; 
  }
  .blocker {
    width: 45rem;
    display: inline-block;
  }
  .btn {
    width: 14rem;
    display:inline-block;
  }
</style>