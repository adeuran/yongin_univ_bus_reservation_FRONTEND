<template>
  <MARQUEE><a :href="link" target="_blank"> <b-icon icon="newspaper"></b-icon> {{text}}</a></MARQUEE>
</template>

<script>
export default {
  name: 'ContextWhite',
  props: {
    text: String,
    link: String,
  }

}
</script>

<style>
  a {
    color: white;
  }
</style>