<template>
    <section class="parallax">
        <div class="parallax-body">
            <div class="v-carusel">
                <swiper
                :modules="modules"
                :slidesPerView="1"
                :spaceBetween="10"
                :effect="'fade'"
                virtual
                :pagination="true" 
                :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                }"
                
            >
            <swiper-slide
                v-for="item in caruselitems"
                v-bind:key="item.id"
                v-bind:itemData="item"
                :virtual="true"
            >   
                <div class="fullscreen-body">
                    <div class="content-container">
                        <img :src="require('../assets/' + item.img )">
                        <div class="wrap-content-slider">
                            <div class="slider-content-title">{{item.title}}</div>
                            <div class="slider-content-subtitle">{{item.subtitle}}</div>
                            <div class="slider-content-button"><router-link to="/shop" class="main-button white-btn">find out more</router-link></div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
<script>
import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination,Autoplay,EffectFade } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
export default {
   setup() {
        return {
          Virtual,
          modules: [Pagination,Virtual,Autoplay,EffectFade],
        }
    },
    data(){
        return{
            caruselitems:[
                {id:1, name:'', img:'munti.webp', title:'SHOPISLE', subtitle:'FULLY RESPONSIVE'},
                {id:2, name:'', img:'mare.webp', title:'CREATE A SHOP IN MINUTES', subtitle:'EFORTLESS PREMIUM DESIGN'},
                {id:3, name:'', img:'bg.jpg', title:'INTEGRATION', subtitle:'PERFECTLY INTEGRATED WITH WOOCOMMERCE'}
            ]
        }
    },
    components:{
        Swiper,
        SwiperSlide,
    }
}
</script>
