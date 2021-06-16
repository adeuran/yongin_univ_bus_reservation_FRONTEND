<template>
  <b-button @click="btnClicked" variant="light" class="button">
      <b-icon class="icon" :icon="icon" aria-hidden="true"></b-icon>
      <span class="text">{{text}}</span>
  </b-button>
</template>

<script>
export default {
    name: 'ButtonWithIcon',
    props: {
      icon: String,
      text: String,
    },
    methods: {
       btnClicked(e) {
        this.$emit("btn-clicked", e);
       }
    }
}
</script>

<style scoped>
  .button {
    width: 140px;
    height: 140px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
    padding: 20px;
  }
  .icon {
    height: 70px;
    width: 70px;
    display: inline-block;
  }
  .text {
    display: inline-block;
    font-weight: bold;
    margin: 7px;
  }
</style>