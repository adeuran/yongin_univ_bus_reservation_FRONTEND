<template>
  <div class="padding">
      <b><icon :hidden="labelHidden" :icon="prefixIcon"></icon><context-gray :hidden="labelHidden" :message="labelMessage"></context-gray></b>
      <two-radio-btn :isDisabled="isDisabled" :btn1Text="btn1Text" :btn2Text="btn2Text" :btn1Value="btn1Value" :btn2Value="btn2Value" @btnClick="btnClick"></two-radio-btn>
  </div>
</template>

<script>
import TwoRadioBtn from '@/components/TwoRadioBtn.vue';
import Context_Gray from '@/components/Context_Gray.vue';
import Icon from '@/components/Icon.vue';
export default {
    name: 'TwoRadioBtnWithText',
    components: {
        TwoRadioBtn,
        'context-gray':Context_Gray,
        Icon,
    },
    props: {
        btn1Text: String,
        btn2Text: String,
        btn1Value: String,
        btn2Value: String,
        labelMessage: String,
        labelHidden: Boolean,
        prefixIcon: String,
        isDisabled: Boolean,
    },
    methods: {
        btnClick(e){
            this.$emit("btnClick", e);
        }
    }
}
</script>

<style scoped>
    .padding {
        padding: 20px;
    }
</style>