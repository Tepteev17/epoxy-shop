<template>
    <div class="sort-products">
        <div class="wrap-select">
            <p 
                class="title-options"
                v-on:click="isAreOptionsVisible = !isAreOptionsVisible"
            >{{selected}}</p>
            <div class="options"
                v-if="isAreOptionsVisible"
            >
                <p
                    class="option"
                    v-for="option in options"
                    v-bind:key="option.value"
                    v-on:click="selectOption(option)"
                >
                {{option.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'v-sort-products.vue',
    data(){
        return{
            isAreOptionsVisible:false,
            selected:'All'
        }
    },
    props:{
        options:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        selectOption(option){
            this.$emit('select', option)
            this.selected = option.name
            this.isAreOptionsVisible = false
        }
    }
}
</script>