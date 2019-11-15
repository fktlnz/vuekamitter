<template>
    <div class="c-input p-input__option">
        <label class="c-input__label">{{label}}</label>
        <input @keyup.enter="$emit('enter-key')" v-on:keyup="onChange($event)" v-bind:value="value" v-bind:type="type" class="c-input__txt p-like-input__txt" v-bind:name="name" v-bind:placeholder="placeholder" autocomplete="off">
    </div>
</template>


<script>
// import Vue from 'vue'

export default {
    props:[
        'type',
        'label',
        'name',
        'value',
        'placeholder'
    ],
    data: function(){
        return {
        }
    },
    methods: {
        onChange($event) {
            this.$emit('onChange', {input: $event.target})
        }
    }

}
</script>