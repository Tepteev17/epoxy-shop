<template>
    <div class="v-header">
    <header class="header">
      <div class="container">
        <div class="header-body">
            <div class="logo">epoxy pro</div>
          <div class="header-burger" v-on:click="isHeaderVisible = !isHeaderVisible">
            <span></span>
          </div>
          <nav class="header-menu" :class="{ active: isHeaderVisible }" >
            <ul class="header-list">
                <li>
                    <router-link to="/home" v-on:click="headerNotShow">Home</router-link> 
                </li>
                <li>
                    <router-link to="/shop" v-on:click="headerNotShow">shop</router-link>
                </li> 
                <li>
                    <router-link to="/about-us" v-on:click="headerNotShow">about us</router-link>
                </li>
                <li>
                    <router-link to="/blog" v-on:click="headerNotShow">blog</router-link>
                </li>
                 <li>
                    <router-link to="/Contact" v-on:click="headerNotShow">Contact</router-link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </div>
</template>
<script>
export default {
    name:'v-header',
    data(){
        return{
            isHeaderVisible:false
        }
    },
    methods:{
        headerNotShow(){
            this.isHeaderVisible = false
        }
    }
}
</script>
