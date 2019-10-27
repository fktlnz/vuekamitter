<template>
    <div class="c-input p-input__option">
        <label class="c-input__label">{{label}}</label>
        <input v-on:keyup="onChange($event)" v-bind:type="type" class="c-input__txt p-like-input__txt" v-bind:name="name" v-bind:placeholder="placeholder" autocomplete="off">
    </div>
</template>


<script>
// import Vue from 'vue'

export default {
    props:[
        'type',
        'label',
        'name',
        'placeholder'
    ],
    data: function(){
        return {
        }
    },
    methods: {
        onChange($event) {
            console.log('text変更@inputForm')
            this.$emit('onChange', {input: $event.target})
        }
    }

}
</script>