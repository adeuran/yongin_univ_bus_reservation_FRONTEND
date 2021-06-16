<template>
  <b-form-select class="fullsize" v-model="selected" :options="options" :disabled="disabled"></b-form-select>
</template>

<script>
export default {
    name: 'FromSelect',
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: this.defaultText },
        ]
        }
        
    },
    props: {
        defaultText: String,
        items: Array,
        disabled: Boolean,
    },
    watch: {
        'items' : function() {
            this.options = new Array();
            this.seleced = null;
            this.options.push({value:null, text:this.defaultText});
            this.items.forEach(
                (value, text) => {
                    this.options.push({value: value, text:text});
            })
        }
    }
}
</script>

<style scoped>
    .fullsize {
        width: 90%;
    }

</style>