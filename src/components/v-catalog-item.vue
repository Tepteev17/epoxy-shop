<template>
    <div class="catalog-item">
        <div class="wrapper-item">
            <div class="img-item">
                <img
                    src="https://th.bing.com/th/id/R.5b45dd1b060fd9831ac863737a3be9b4?rik=6ZnLGLId%2fOKoIw&pid=ImgRaw&r=0"
                    alt=""
                />
                <div class="hover-screen">
                    <div class="wrap-buttons">
                        <button class="main-button">add to card</button>
                        <button class="main-button">quick view</button>
                    </div>
                </div>
            </div>
            <div class="wrap-info-card font-alt">
                <div class="title-item">
                    <a href="#"></a>{{ itemData.title }}
                </div>
                <div class="rait"></div>
                <div class="price-item">{{ itemData.price }} EUR</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-catalog-item",
    props: {
        itemData: Object,
    },
};
</script>
