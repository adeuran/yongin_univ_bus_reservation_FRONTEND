<template>
  <b-table
  class="marg"
  responsive="sm"
  :items="items"
  show-empty
  fixed
  :fields="fields"
  sticky-header="70vh"
  :sort-by.sync="sortBy"
  >
    <template #cell(actions)="row">
        <b-button size="sm" class="mr-1" @click="click(row.item, row.index)">
          {{ BtnName }}
        </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'TableWithAButton',
  data() {
    return {
      sortBy: 'id',
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
    }
  }
}
</script>
  
<style scoped>
  .marg {
    margin: 20px 0;
}
</style>