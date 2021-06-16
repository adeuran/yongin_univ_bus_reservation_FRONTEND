<template>
  <b-button @click="btnClicked" class="width_fill up_blank btn_blue">{{ message }}</b-button>
</template>

<script>
export default {
  name: 'BlueButton',
  props: {
    message: String,
  },
  methods: {
    btnClicked(e) {
      this.$emit("btn-clicked",e);
    }
  },
}
</script>

<style scoped>
  .width_fill {
    width: 100%;
  }
  .up_blank {
    margin-top: 10px;
  }
  .btn_blue {
    background-color: #3498db;
    border-style: none;
  }
</style>