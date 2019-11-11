<template>    
    <div>        
            <ul>
                <transition-group name="p-flip">
                    <template v-for="error in errors" >
                        <li class="p-info-area" v-bind:key="error">{{ error }}</li>
                    </template>
                </transition-group>
            </ul>

        <router-view/>
        
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