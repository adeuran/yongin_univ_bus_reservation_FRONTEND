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
       listItems: [
        new StationDTO(1, "학교", "학교앞 네거리"),
        new StationDTO(2,'잠실',"잠실옆동네"),
        new StationDTO(3,'동대문',"동대문과 남대문 사이"),
        new StationDTO(4,"남산","남산과 뒷산 사이"),
        new StationDTO(6,'방돌',"거실돌 옆 방돌"),
        new StationDTO(5,'신세계',"손모가지 역 앞"),
        new StationDTO(7,'안양',"우리집 근처 역에서"),
        new StationDTO(8,'옆산',"뒷산과 옆산 사이"),
        new StationDTO(9,'뒷산',"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세. 무궁화삼천리 화려강산 대한사람 대한으로 길이 보전하세."),
        new StationDTO(10,'화분',"국산아니면 안받아요"),
        new StationDTO(12,'사슴',"고라니와는 다른 동물"),
        new StationDTO(11,'너구리',"너굴맨은 너구리가 아닙니다"),
      ],
    };
  },
  methods: {
    addBtnClick() {
      console.log("add btn clicked")
    },
    tableBtnClick(item, index) {
      console.log("Clicked At ",index)
      console.log("item", item)
    }
  }

};
</script>

<style scoped>

</style>