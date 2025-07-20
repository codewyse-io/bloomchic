<template>
<section class="category">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="category_list">
                    <ul class="slider" ref="slider">
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/img/category_1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Outdoor and garden</h3>
                                    <hr>
                                    <span>→ Shop</span>
                                </div>
                            </div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

</template>





<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

export default {
    mounted() {
        // Initialize Slick Slider
        jquery(this.$refs.slider).slick({
            // Slick Slider options
            infinite: false,
            slidesToShow: window.screen.width < 700 ? 1 : 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>




<style scoped>
section.category {
    background: #dbd6d0;
    padding: 60px 0;
}

.category_list ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}
.category_list ul li:hover a .cat_box_list img {
    box-shadow: 0px 0px 15px #666;
}
.category_list ul li .cat_box_list {position: relative;padding: 10px 10px 10px 10px;}

.category_list ul li .cat_box_list img {
    width: 279px;
    height: 320px  !important;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #66666650;
}

.category_list ul li .cat_box_list .cat_info {
    position: absolute;
    top: unset;
    bottom: 20px;
    z-index: 99;
    color: white;
    left: 15px;
    text-align: start;
}


.category_list ul li .cat_box_list .cat_info h3 {
    color: #fff;
    bottom: 16px;
    text-shadow: 0 0 10px #66666670;
    font-size: 24px;
    font-weight: 700;
    padding-right: 32px;
    word-wrap: break-word;
}

.category_list ul li .cat_box_list .cat_info span {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
}

.category_list ul li .cat_box_list .cat_info hr {
    color: #fff !important;
    border-top: 1px solid;
    margin-bottom: 16px;
    opacity: 1;
    width: 95%;
}
</style>