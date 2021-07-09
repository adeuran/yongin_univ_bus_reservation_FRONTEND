<template>
  <b-row>
    <b-col :sm="labelSize">
      <label :for="textAreaId">{{ labelText }}</label>
    </b-col>
    <b-col :sm="textAreaSize">
      <text-area
      :textAreaId="textAreaId"
      :textAreaPlaceholder="textAreaPlaceholder"
      ></text-area>
    </b-col>
  </b-row>
</template>

<script>
import TextArea from '@/components/TextArea';
export default {
  components: {
    TextArea,
  },
  props: {
    labelSize: String,
    labelText: String,
    textAreaSize: String,
    textAreaId: String,
    textAreaPlaceholder: String,
  },
}
</script>

<style>

</style>