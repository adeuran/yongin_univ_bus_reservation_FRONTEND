<template>
  <h2>{{message}}</h2>
</template>

<script>
export default {
    name: 'H2',
    props: {
        message: String,
    },
}
</script>

<style scoped>
    h2 {
        font-weight: bold;
    }
</style>