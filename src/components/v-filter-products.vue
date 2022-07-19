<template>
    <div class="v-filter">
        <div class="search-form mg-30-0">
            <form class="form" @submit.prevent>
                <input
                    type="text"
                    v-model="nameProducts"
                    placeholder="Search products..."
                />
                <div class="wrap">
                    <button
                        class="main-button"
                        v-on:click="serchProductsByName"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
        <div class="wrap-range mg-30-0">
            <h3 class="headline-small">Filter by price</h3>
            <hr class="hr-filter" />
            <div class="range-slider">
                <span class="full-range"></span>
                <span class="incl-range"></span>
                <input
                    name="rangeOne"
                    min="50"
                    max="1500"
                    step="25"
                    type="range"
                    v-model.number="minPrice"
                    v-on:chsnge="setRangeSlider"
                />
                <input
                    name="rangeTwo"
                    min="50"
                    max="1500"
                    step="25"
                    type="range"
                    v-model.number="maxPrice"
                    v-on:change="setRangeSlider"
                />
            </div>
            <div class="price-filter">
                <p>Price: £{{ minPrice }} -- £{{ maxPrice }}</p>
            </div>
        </div>
        <div class="filter-categories-product">
            <div class="headline-small">Product category</div>
            <hr class="hr-filter" />
            <ul
                class="category-list"
                v-for="catItem in categoryList"
                v-bind:key="catItem.name"
            >
                <li class="category-item">
                    <input
                        type="checkbox"
                        v-model="selectedCategory"
                        v-bind:value="catItem.name"
                    />
                    <a href="#" class="catetegory-link">{{ catItem.name }}</a>
                </li>
            </ul>
            <div class="headline-small">form factor</div>
            <hr class="hr-filter" />
            <ul
                class="category-list"
                v-for="formFactItem in formFactorList"
                v-bind:key="formFactItem.name"
            >
                <li class="category-item">
                    <input
                        type="checkbox"
                        v-model="selectFormFactor"
                        v-bind:value="formFactItem.name"
                    />
                    <a href="#" class="catetegory-link"
                        >{{ formFactItem.name }} tables</a
                    >
                </li>
            </ul>
            <div class="wrapper-btn-filters">
                <div class="wrap">
                    <button class="main-button" v-on:click="applyFilters">
                        Apply
                    </button>
                </div>
                <div class="wrap">
                    <button class="main-button" v-on:click="resetFilters">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "v-filter-products",
    data() {
        return {
            nameProducts: "",
            minPrice: 50,
            maxPrice: 1500,
            selectedCategory: [],
            selectFormFactor: [],
            categoryList: [
                {
                    key: 1,
                    name: "Office",
                },
                {
                    key: 2,
                    name: "Kitchen",
                },
                {
                    key: 3,
                    name: "Coffee",
                },
                {
                    key: 4,
                    name: "Work",
                },
            ],
            formFactorList: [
                {
                    key: 1,
                    name: "Square ",
                },
                {
                    key: 2,
                    name: "Rectangular",
                },
                {
                    key: 3,
                    name: "Round",
                },
                {
                    key: 4,
                    name: "oval",
                },
                {
                    key: 5,
                    name: "Other",
                },
            ],
        };
    },
    methods: {
        serchProductsByName() {
            this.$emit("nameProducts", this.nameProducts);
            this.nameProducts = "";
        },
        setRangeSlider() {
            if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
            }
        },
        applyFilters() {
            const allApplyFilters = [
                this.selectedCategory,
                { 0: this.minPrice, 1: this.maxPrice },
                this.selectFormFactor,
            ];
            this.$emit("allApplyFilters", allApplyFilters);
        },
        resetFilters() {
            const allApplyFilters =
                (this.selectedCategory =
                this.selectFormFactor =
                    []);
            this.minPrice = 50;
            this.maxPrice = 1500;
            this.$emit("resetFilters", allApplyFilters);
        },
    },
    watch: {},
};
</script>
