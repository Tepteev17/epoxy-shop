<template>
    <div class="v-main-wrapper">
        <v-catalog/>
    </div>
</template>
<script>
import vCatalog from '@/components/v-catalog.vue'
export default {
    name:'v-main-wrapper',
    components:{vCatalog},
    props:{},
    data(){
        return{}
    },
    computed:{},
    methods:{},
    watch:{},
    mounted(){}
}
</script>