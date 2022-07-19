<template>
    <div class="v-home"> 
        <v-carusel/>
        <div class="wrap-content-home">
            <div class="container">
                <div class="about-container">
                    <div class="headline-wrapper">
                        <div class="headline font-alt">WE ARE ELEGANT</div>
                        <div class="subhead font-serif">Elegance isn't solely defined by what you wear. It's how you carry yourself.</div>
                    </div>
                    <div class="section-about">
                        <div class="unit-section">
                            <div class="svg-item"><img src="../assets/box.svg" alt=""></div>
                            <h3 class="headeline headline-small">Beautiful Products</h3>
                            <p class="font-serif">I never look at other people's work. My mind has to be completely focused on my own illusions. It's a philosophy of life. A practice with no end.</p>
                        </div>
                        <div class="unit-section">
                            <div class="svg-item"><img src="../assets/location.png" alt=""></div>
                            <h3 class="headeline headline-small">Fast Delivery</h3>
                            <p class="font-serif">If you do this, something will change, what will change is that you will change, your life will change, and if you can change you, you can perhaps change the world. </p>
                        </div>
                        <div class="unit-section">
                            <div class="svg-item"><img src="../assets/star.svg" alt=""></div>
                            <h3 class="headeline headline-small">100% Satisfaction</h3>
                            <p class="font-serif">I've always thought of the T-shirt as the Alpha and Omega of the fashion alphabet. I like the things around me to be beautiful and slightly dreamy.</p>
                        </div>
                    </div>
               </div>
                <div class="grid-container">
                    <div class="catalog-home-wrap grid-body">
                        <v-catalog-item
                            v-for="item in this.$store.state.products.slice(0,8)"
                            v-bind:key="item.id"
                            v-bind:itemData="item"
                        />
                    </div>
                </div>
                <div class="button-wrap">
                    <router-link class="main-button" to="/shop">see all products</router-link>
                </div>
           </div>
           <hr>
           <div class="container">
               <div class="banners-wrap">
                   <div class="banners-item">
                       <img src="https://mllj2j8xvfl0.i.optimole.com/YyZCPVs-cl7DNdDT/w:auto/h:auto/q:90/https://s20206.pcdn.co/shop-isle-pro-2/wp-content/themes/shop-isle-pro/assets/images/banner1.jpg" alt="">
                   </div>
                   <div class="banners-item">
                        <img src="https://mllj2j8xvfl0.i.optimole.com/YyZCPVs-cl7DNdDT/w:auto/h:auto/q:90/https://s20206.pcdn.co/shop-isle-pro-2/wp-content/themes/shop-isle-pro/assets/images/banner2.jpg" alt="">
                   </div>
                   <div class="banners-item">
                        <img src="https://mllj2j8xvfl0.i.optimole.com/YyZCPVs-cl7DNdDT/w:auto/h:auto/q:90/https://s20206.pcdn.co/shop-isle-pro-2/wp-content/themes/shop-isle-pro/assets/images/banner3.jpg" alt="">
                   </div>
               </div>
               <div class="wrap-products-slider"> 
                   <div class="subhead font-serif">Our most wanted products.</div>
                   <div class="products-slider">
                       <v-carusel-products
                            v-bind:arrProducts="this.$store.state.products"
                       />
                   </div>
                </div>
           </div>
           <div class="ribbon">
               <div class="container">
                   <div class="wrap-ribbon">
                       <h2 class="font-roboto">Find out more</h2>
                       <div class="wrap-button">
                           <button class="main-button">click ro subscribe</button>
                        </div> 
                   </div>
               </div>
           </div>
           <div class="container">             
                <v-home-form/>
           </div>
        </div>
    </div>
</template>
<script lang="js">
import vCarusel from '@/components/v-carusel.vue'
import vCatalogItem from '@/components/v-catalog-item.vue'
import vHomeForm from '@/components/v-home-form.vue'
import vCaruselProducts from '@/components/v-carusel-products.vue'
import {mapActions} from 'vuex'
export default {
    name:'v-home',
    components:{vCarusel, vCatalogItem,vCaruselProducts,vHomeForm},
    props:{},
    data(){
        return{
        }
    },
    computed:{},
    methods:{
         ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
    },
    watch:{},
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>
