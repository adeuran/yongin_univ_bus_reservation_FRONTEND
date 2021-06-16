<template>
    <div class="position">
        <four-buttons-with-icon></four-buttons-with-icon>
    </div>
</template>

<script>
import FourButtonsWithIcon from '@/molecules/FourButtonsWithIcon'
export default {
    name: 'MainBody',
    components: {
        FourButtonsWithIcon,
    }
}
</script>

<style scoped>
    .position {
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }
</style>