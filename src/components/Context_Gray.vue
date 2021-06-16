<template>
  <p>{{message}}</p>
</template>

<script>
export default {
    name: 'Context',
    props: {
        message: String,
    },
}
</script>

<style scoped>
    p {
        color: gray;
    }
</style>