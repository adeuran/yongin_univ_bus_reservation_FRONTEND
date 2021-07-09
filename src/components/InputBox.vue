<template>
  <b-form-input
  :id="inputId"
  type="text"
  :placeholder="inputBoxPlaceholder"
  ></b-form-input>
</template>

<script>
export default {
  props: {
    inputId: String,
    inputBoxPlaceholder: String,
  }
}
</script>

<style>

</style>