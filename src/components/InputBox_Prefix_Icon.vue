<template>
    <b-input-group class="mb-2" :append="append">
      <b-input-group-prepend is-text>
        <b-icon :icon="prepend"></b-icon>
      </b-input-group-prepend>
      <b-form-input :type="type" :placeholder="placeholder" @input="inputUpdate"></b-form-input>
    </b-input-group>
</template>
    
<script>
export default {
    name: 'Inputbox_With_Icon',
    props: {
        placeholder: String,
        prepend: String,
        append: String,
        type: String,
    },
    methods: {
        inputUpdate(inputText) {
            this.$emit('input-from-child',inputText);
        }
    }
}
</script>

<style>

</style>