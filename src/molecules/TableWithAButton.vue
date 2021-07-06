<template>
  <b-table
  class="marg"
  responsive="sm"
  :items="items"
  show-empty
  fixed
  :fields="fields"
  :busy="isBusy"
  sticky-header="70vh"
  :sort-by.sync="sortBy"
  >
    <template #cell(actions)="row">
        <b-button size="sm" class="mr-1" @click="click(row.item, row.index)">
          {{ BtnName }}
        </b-button>
    </template>
    <template #table-busy>
        <div class="text-center text-info my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>불러오는중...</strong>
        </div>
      </template>
  </b-table>
</template>

<script>
export default {
  name: 'TableWithAButton',
  data() {
    return {
      sortBy: 'id',
      isBusy: true,
    }
  },
  props: {
    BtnName: String,
    fields: Array,
    items: Array,
  },
  methods: {
    click(item, index) {
      this.$emit("click",item, index);
    },
  },
  watch: {
    // props가 비동기로 데이터를 불러왔다면
    items: {
      handler(value, oldValue) {
      if (this.items != null)
        this.isBusy = false;
      else
        this.isBusy = true;
    },
    immediate: true,
    }
  },
}
</script>
  
<style scoped>
  .marg {
    margin: 20px 0;
}
</style>