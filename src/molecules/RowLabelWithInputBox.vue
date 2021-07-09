<template>
  <b-row>
    <b-col :sm="labelSize">
      <label :for="inputId">{{ labelText }}</label>
    </b-col>
    <b-col :sm="inputSize">
      <input-box
      :inputId="inputId"
      :inputBoxPlaceholder="inputBoxPlaceholder"
      ></input-box>
    </b-col>
  </b-row>
</template>

<script>
import InputBox from '@/components/InputBox';
export default {
  components: {
    InputBox,
  },
  props: {
    labelSize: String,
    labelText: String,
    inputSize: String,
    inputId: String,
    inputBoxPlaceholder: String,
  },
}
</script>

<style>

</style>