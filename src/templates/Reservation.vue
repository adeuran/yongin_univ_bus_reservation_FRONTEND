<template>
  <div>
      <header-without-back></header-without-back>
      <reservation-body 
      @typeBtnClick="typeBtnClick"
      @dateBtnClick="dateBtnClick"
      :routeDisabled="routeDisabled"
      >
      </reservation-body>
  </div>
</template>

<script>
import TopHeader from '@/organisms/TopHeader';
import ReservationBody from '@/organisms/ReservationBody';
export default {
    name: 'Reservation',
    components: {
        TopHeader,
        ReservationBody,
    },
    data() {
        return {
            typeBtnSelected: '',
            dateBtnSelected: '',
            routeDisabled: true,
        }
    },
    methods: {
        typeBtnClick(e) {
            this.typeBtnSelected = e;
        },
        dateBtnClick(e) {
            this.dateBtnSelected = e;
        },
        getRoutes() {

        },
    },
}
</script>

<style>

</style>