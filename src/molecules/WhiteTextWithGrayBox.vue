<template>
  <div>
      <link-white :text="text" :link="link"></link-white>
  </div>
</template>

<script>
import LinkWhite from '@/components/LinkWhite';
export default {
    name: 'WhiteTextWithGrayBox',
    components: {
        LinkWhite,
    },
    props: {
        text: String,
        link: String,
    }
}
</script>

<style scoped>
    div {
        background-color: gray;
        width: 100%;
    }
</style>