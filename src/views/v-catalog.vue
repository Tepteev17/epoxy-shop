<template>
    <div class="v-catalog">
        <div class="container">
            <v-sort-products
                v-bind:options="options"
                v-on:select="sortedProductsbySelected"
            />
            <div class="wrapper-catalog-filter">
                <v-filter-products
                    v-on:nameProducts="serchProductsByName"
                    v-on:allApplyFilters="applyFilters"
                    v-on:resetFilters="resetFilters"
                />
                <div class="grid-container" v-if="monitorStateArray">
                    <div class="catalog-home-wrap grid-body">
                        <v-catalog-item
                            v-for="item in filteredProducts"
                            v-bind:key="item.id"
                            v-bind:itemData="item"
                        />
                    </div>
                </div>
                <div class="nothing-found-headline headline" v-else>Nothing found</div>
            </div>
        </div>
    </div>
</template>
<script>
import vCatalogItem from "@/components/v-catalog-item.vue";
import vFilterProducts from "@/components/v-filter-products.vue";
import vSortProducts from "@/components/v-sort-products.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
        vSortProducts,
        vFilterProducts,
    },
    props: {},
    data() {
        return {
            options: [
                { name: "All", value: "All" },
                { name: "Alphabetically, A-Z", value: 1 },
                { name: "Alphabetically, Z-A", value: 1 },
                { name: "Low to high", value: "PriceLowToHigh" },
                { name: "High to low", value: "PriceHighToLow" },
                { name: "Rate, High to low", value: 1 },
            ],
            originalProductsList: [],
            sortedProducts: [],
            finalProductsList: []
        };
    },
    computed: {
        ...mapGetters(["PRODUCTS"]),
        conclusionProducts(){
            
        },
        filteredProducts() {
            if (this.finalProductsList.length) {
                return this.finalProductsList
            } else {
                return this.PRODUCTS
            }
        },
        monitorStateFinalProductsList(){
            if(this.finalProductsList.length){
                return true
            }else{
                return false
            }
            
        }
    },
    methods: {
        ...mapActions(["GET_PRODUCTS_FROM_API"]),
        checkSortedProduct() {
            if (!this.sortedProducts.length) {
                this.sortedProducts = this.PRODUCTS
            }
        },
        sortedProductsbySelected(select = "All") {
            if (select.value === "PriceLowToHigh") {
                return (this.finalProductsList = this.sortedProducts.sort((a, b) => a.price - b.price))
            }
            if (select.value === "All") {
                return (this.finalProductsList = JSON.parse(JSON.stringify(this.PRODUCTS)))
            }
            if (select.value === "PriceHighToLow") {
                return (this.finalProductsList = this.sortedProducts.sort((a, b) => -a.price + b.price))
            }
        },
        serchProductsByName(nameProducts) {
            const result = []
            this.sortedProducts.filter((el) => {
                if (el.title.toLowerCase().includes(nameProducts.toLowerCase())){
                    result.push(el)
                }
            })
            return this.finalProductsList = this.sortedProducts = result
        },
        filterByPrice(allApplyFilters){
            const minPrice = allApplyFilters[1][0],
                  maxPrice = allApplyFilters[1][1],
                  result = []
            //
            this.sortedProducts.forEach(el => {
                if(el.price < maxPrice && el.price > minPrice){
                    result.push(el)
                }
            })
            return this.sortedProducts = result
        },
        filterByCategory(allApplyFilters) {
            const result = [],
                  objSelectedCategory = allApplyFilters[0]
            //
            this.sortedProducts.forEach((el) => {
                for (let i = 0; i < objSelectedCategory.length; i++) {
                    if (el.category.toLowerCase() === objSelectedCategory[i].toLowerCase()) {
                        result.push(el)
                    }
                }
            });
            return this.sortedProducts = result
        },
        filterByFormFactor(allApplyFilters){
             const result = [],
                  objSelectedFormFactor = allApplyFilters[2]
                  console.log(objSelectedFormFactor);
            this.sortedProducts.forEach((el) => {
                console.log(el.formFactor);
                for (let i = 0; i < objSelectedFormFactor.length; i++) {
                    if (el.formFactor.toLowerCase() === objSelectedFormFactor[i].toLowerCase()) {
                        result.push(el)
                    }
                }
            });
            return this.sortedProducts = result
        },
        applyFilters(allApplyFilters) {

            allApplyFilters.length === 0 ? this.finalProductsList = this.originalProductsList:
                this.sortedProducts = this.originalProductsList
                this.filterByPrice(allApplyFilters)
                this.filterByCategory(allApplyFilters)
                this.filterByFormFactor(allApplyFilters)
                this.finalProductsList = this.sortedProducts
        },
        //resetFilters(){
        //    this.finalProductsList = JSON.parse(JSON.stringify(this.PRODUCTS))
        //}
    },
    watch: {},
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    },
};
</script>

