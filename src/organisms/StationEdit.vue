<template>
<div>
  <body-head-message
  :headMessage="headMessage"
  :contextMessage="contextMessage"
  ></body-head-message>
  <b-container>
    <row-label-with-input-box
    labelSize="3"
    labelText="정류장 이름"
    inputSize="5"
    inputId="stationName"
    inputBoxPlaceholder="정류장 이름을 입력하세요."
    ></row-label-with-input-box>
    <row-label-with-text-area
    labelSize="3"
    labelText="정류장 설명"
    textAreaSize="5"
    textAreaId="stationExplain"
    textAreaPlaceholder="정류장에 대한 설명을 입력하세요."
    ></row-label-with-text-area>
    <click-pin-map></click-pin-map>
  </b-container>
</div>
</template>

<script>
import BodyHeadMessage from '@/molecules/BodyHeadMessage'
import RowLabelWithInputBox from '@/molecules/RowLabelWithInputBox'
import RowLabelWithTextArea from '@/molecules/RowLabelWithTextArea'
import ClickPinMap from '@/components/clickPinMap'
export default {
  
  components: { 
    BodyHeadMessage,
    RowLabelWithInputBox,
    RowLabelWithTextArea,
    ClickPinMap,
  },
  props: {
    headMessage: String,
    contextMessage: String,
  },

}
</script>

<style>
  
</style>