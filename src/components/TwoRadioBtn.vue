<template>
  <b-form-radio-group
        class="selectBtn"
        v-model="selected"
        :options="options"
        button-variant="outline-info"
        size="lg"
        name="bnt-radio"
        :disabled="isDisabled"
        buttons
      ></b-form-radio-group>
</template>

<script>
export default {
    name: 'TwoRadioBtn',
    data() {
      return {
        selected: '',
        options: [
          { text: this.btn1Text, value: this.btn1Value },
          { text: this.btn2Text, value: this.btn2Value },
        ],
      }
    },
    props: {
        btn1Text: String,
        btn2Text: String,
        btn1Value: String,
        btn2Value: String,
        isDisabled: Boolean,
    },
    watch: {
        'selected': function(){
            this.$emit("btnClick", this.selected);
        }
    },
}
</script>

<style scoped>
    .selectBtn {
        width: 100%;
    }
</style>