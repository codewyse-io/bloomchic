<template>
<productDetails />
<ProductGuide />
<ProductList />



<FooterSection />
</template>

<script>
import productDetails from "@/components/productDetails.vue"
import ProductGuide from "@/components/ProductGuide.vue"
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue";

export default {
    components: {
        productDetails,
        ProductList,
        ProductGuide,
        FooterSection,
    },
    methods: {
        addMainClass(event) {
        if (event.target.type === 'radio' && event.target.checked) {
            document.querySelector('.Main_class').classList.add('main-added');
        }
    },
    
    }

};
</script>

<style scoped>
.rating {
    display: inline-block;
}

.rating input {
    display: none;
}

.rating label {
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-image: url('../assets/img/star-empty-icon.webp'); /* Replace with your star image */
    background-size: cover;
}

.rating input:checked + label {
    background-image: url('../assets/img/star-filled-1.png'); /* Replace with your filled star image */
}
.col-md-12.Main_class {
    width: 50%;
    margin: 10px auto 20px;
    opacity: 0;
    height: 60px;
}

.col-md-12.Main_class .login_field {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 20px 0 0 0;
}

.col-md-12.Main_class .login_field label {
    font-size: 18px;
    margin: 0 0 2px 0;
    font-weight: 500;
}

.col-md-12.Main_class .login_field input {
    height: 40px;
}

.col-md-12.Main_class .login_field input[type="submit"] {
    width: 40%;
    background: black;
    color: white;
    border: none;
    font-size: 18px;
    border-radius: 10px;
}

.col-md-12.Main_class.main-added {
    height: auto;
    opacity: 1;
}
section.pr_revies {
    padding: 60px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
}
</style>
