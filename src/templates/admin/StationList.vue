<template>
  <div>
    <top-header></top-header>
    <station-list-body :listFields="listFields" :listItems="listItems" @add-btn-click="addBtnClick" @table-btn-click="tableBtnClick"></station-list-body>
  </div>
</template>

<script>
import TopHeader from "@/organisms/TopHeader.vue"
import StationListBody from '@/organisms/StationListBody.vue'

export default {
  components: {
    TopHeader,
    StationListBody,
  },
  data(){
    return{
      listFields: [
          { key: 'id', label: '번호', sortable: true, class: 'text-center', thStyle: 'width:5rem'},
          { key: 'station', label: '정류장명', sortable: true, class: 'text-center' , thStyle: 'width:15rem'},
          { key: 'explain', label: '세부설명', sortable: true },
          { key: 'actions', label: '동작', class: 'text-center', thStyle: 'width:7rem'}
        ],
       listItems: [
        { explain: "용인대학교 앞", station: '학교', id:1 },
        { explain: "잠실옆동네", station: '잠실', id:2 },
        { explain: "동대문과 남대문 사이", station: '동대문', id:3 },
        { explain: "남산과 뒷산 사이", station: '남산', id:3},
        { explain: "거실돌 옆 방돌", station: '방돌', id:5 },
        { explain: "손모가지 역 앞", station: '신세계', id:4 },
        { explain: "우리집 근처 역에서", station: '안양', id:6 },
        { explain: "뒷산과 옆산 사이", station: '옆산', id:4 },
        { explain: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세. 무궁화삼천리 화려강산 대한사람 대한으로 길이 보전하세.", station: '뒷산', id:5 },
        { explain: "국산아니면 안받아요", station: '화분', id:6 },
        { explain: "고라니와는 다른 동물", station: '사슴', id:7 },
        { explain: "너굴맨은 너구리가 아닙니다", station: '너구리', id:8 },
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