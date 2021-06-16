<template>
    <div class="header">
        <yongin-image-white class="center"></yongin-image-white>
    </div>
</template>

<script>
import YonginUnivImage_White from '@/components/YonginUnivImage_White'
export default {
    name: 'HeaderWithoutBack',
    components: {
        'yongin-image-white':YonginUnivImage_White
    },
}
</script>

<style scoped>
    .header {
        width: 100%;
        height: 60px;
        background-color: #80b4cd;
    }
    .center {
        display: block;
        margin: 0 auto;
        padding: 10px;
    }
</style>