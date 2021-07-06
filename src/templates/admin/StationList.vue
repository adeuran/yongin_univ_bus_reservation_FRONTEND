<template>
  <div>
    <top-header></top-header>
    <station-list-body :listFields="listFields" :listItems="listItems" @add-btn-click="addBtnClick" @table-btn-click="tableBtnClick"></station-list-body>
  </div>
</template>

<script>
import TopHeader from "@/organisms/TopHeader.vue";
import StationListBody from "@/organisms/StationListBody.vue";

import StationDTO from "@/dto/StationDTO";
import StationApi from "@/api/station.api.js";

export default {
  components: {
    TopHeader,
    StationListBody,
  },
  data(){
    return{
      listFields: [
          { key: 'id', label: '번호', sortable: true, class: 'text-center', thStyle: 'width:5rem'},
          { key: 'name', label: '정류장명', sortable: true, class: 'text-center' , thStyle: 'width:15rem'},
          { key: 'explain', label: '세부설명', sortable: true },
          { key: 'actions', label: '동작', class: 'text-center', thStyle: 'width:7rem'}
        ],
       listItems: null,
    };
  },
  methods: {
    addBtnClick() {
      console.log("add btn clicked")
    },
    tableBtnClick(item, index) {
      console.log("Clicked At ",index)
      console.log("item", item)
    },
    async getAllStation() {
      try {
      const response = await StationApi.getAll();
      if(response) {
        this.listItems = new Array();
        response.forEach(
        (obj) => {
          this.listItems.push(new StationDTO(obj.id, obj.name, obj.explain))
        }
      );
      }
      } catch (error){
        this.LoginError();
        this.listItems = new Array();
      }
      
      
    },
    LoginError() {
          this.$bvModal.msgBoxOk('통신중 문제가 발생했습니다. 반복해서 문제 발생시 관리자에게 문의해주세요.', {
            title: '오류',
            buttonSize: 'sm',
            okVariant: 'info',
            okTitle: '확인',
            headerClass: 'p-2 border-bottom-0',
            footerClass: 'p-2 border-top-0',
            centered: true
          });
      }
  },
   created() {
    this.getAllStation();
  }

};
</script>

<style scoped>

</style>