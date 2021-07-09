<template>
  <b-form-textarea
  :id="inputId"
  :placeholder="textAreaPlaceholder"
  ></b-form-textarea>
</template>

<script>
export default {
  props: {
    inputId: String,
    textAreaPlaceholder: String,
  },
}
</script>

<style>

</style>