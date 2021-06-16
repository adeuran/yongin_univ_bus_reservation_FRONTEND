<template>
    <div>
        <H2 class="obj" v-bind:message="headMessage"></H2>
        <Context class="obj smallfont" v-bind:message="contextMessage"></Context>
    </div>
</template>

<script>
import H2 from '@/components/H2';
import Context from '@/components/Context_Gray';
export default {
    name: 'BodyHeadMessage',
    components: {
        H2,
        Context
    },
    props: {
        headMessage: String,
        contextMessage: String,
    },
}
</script>

<style scoped>
    .obj {
        margin: 20px 0;
    }
    .smallfont {
        font-size: 14px;
    }
</style>