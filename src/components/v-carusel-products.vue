<template>
    <swiper
        :modules="modules"
        :slidesPerView="4"
        :spaceBetween="10"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="true"
        :breakpoints="{
            '320': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '510': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            '1440': {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }"
        class="swiper-products"
    >
        <swiper-slide
            v-for="item in arrProducts"
            v-bind:key="item.id"
            v-bind:itemData="item"
            :virtual="true"
        >
            <div class="catalog-item">
                <div class="wrapper-item">
                    <div class="img-item">
                        <img
                            src="https://th.bing.com/th/id/R.5b45dd1b060fd9831ac863737a3be9b4?rik=6ZnLGLId%2fOKoIw&pid=ImgRaw&r=0"
                            alt=""
                        />
                        <div class="opacity-eff"></div>
                    </div>
                    <div class="wrap-info-card font-alt">
                        <div class="title-item">
                            <a href="#"></a>{{ item.title }}
                        </div>
                        <div class="rait"></div>
                        <div class="price-item">{{ item.price }}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
//import vCatalogItem from '@/components/v-catalog-item.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export default {
    name: "v-carusel-products",
    setup() {
        return {
            Virtual,
            modules: [Pagination, Virtual],
        };
    },
    props: {
        arrProducts: Array,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>
