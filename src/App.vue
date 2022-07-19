<template>
  <v-header/>
  <router-view/>
  <v-footer/>
</template>

<script>
//import vMainWrapper from '@/components/v-main-wrapper.vue'
import vHeader from '@/components/v-header.vue'
import vFooter from '@/components/v-footer.vue'
export default {
  name: 'App',
  components: {
    vHeader,vFooter
  }
}
</script>

