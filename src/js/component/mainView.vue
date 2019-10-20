<template>    
    <div>
        
            <ul>
                <transition-group name="flip">
                    <template v-for="error in errors" >
                        <li class="info-area" v-bind:key="error">{{ error }}</li>
                    </template>
                </transition-group>
            </ul>                       
        

        <router-view/>
        <!-- <div class="txt_center">
        <button class="c-btn" v-on:click="test">click</button>        
        </div> -->
        
    </div>
</template>

<script>


export default {
    components: {        
        
    },
    data: function(){
        return {
            errors:[
            ],         
        }
    },   
    methods: {
        test() {
            let a = [...this.errors];
            this.errors = {a, 'test': 230}
        }
    }
}

</script>