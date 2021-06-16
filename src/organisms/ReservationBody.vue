<template>
  <div>
    <two-radio-btn-with-text
    btn1Text="등교" btn1Value="ToSchool"
    btn2Text="하교" btn2Value="FromSchool"
    labelMessage="노선의 종류를 선택해주세요"
    :labelHidden="typeLabelHidden"
    @btnClick="typeBtnClick"
    prefixIcon="signpost-split-fill"
    :isDisabled="isRouteTypeDisabled"
    ></two-radio-btn-with-text>
    <two-radio-btn-with-text
    btn1Text="오늘" btn1Value="오늘"
    btn2Text="내일" btn2Value="내일"
    labelMessage="예약할 날짜를 선택해주세요."
    :labelHidden="dateLabelHidden"
    @btnClick="dateBtnClick"
    prefixIcon="calendar4-range"
    :isDisabled="isDateDisabled"
    ></two-radio-btn-with-text>
    <form-select class="margin"
    :disabled="routeDisabled"
    defaultText="노선을 선택해주세요"
    ></form-select>
  </div>
</template>

<script>
import TwoRadioBtnWithText from '@/molecules/TwoRadioBtnWithText.vue'
import FormSelect from '@/components/FormSelect.vue'
export default {
  components: { 
    TwoRadioBtnWithText,
    FormSelect
     },
  methods: {
    typeBtnClick(e) {
      this.$emit("typeBtnClick", e)
    },
    dateBtnClick(e) {
      this.$emit("dateBtnClick", e)
    },
  },
  props: {
    typeLabelHidden: Boolean,
    dateLabelHidden: Boolean,
    isRouteTypeDisabled: Boolean,
    isDateDisabled: Boolean,
    routeDisabled: Boolean,
  }

}
</script>

<style scoped>
  .margin {
    margin: 20px;
  }
</style>