<template>
<section class="best_selling">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-2">
                <div class="best_selling_head">
                    <h4>Best Sellers</h4>
                    <a href="#">View All ＞</a>
                </div>
            </div>
            <div class="col-md-10">
                <div class="best_selling_prod">
                    <ul class="slider" ref="slider">
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
                                </div>
                            </div></a>
                        </li>
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
                                </div>
                            </div></a>
                        </li>
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
                                </div>
                            </div></a>
                        </li>
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
                                </div>
                            </div></a>
                        </li>
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
                                </div>
                            </div></a>
                        </li>
                        <li>
                           <a href=""> <div class="product_slider">
                                <div class="first_img">
                                    <img :src="require('../assets/images/first_img.webp')" alt="">
                                </div>
                                <div class="back_img">
                                    <img :src="require('../assets/images/second_img.webp')" alt="">
                                </div>
                                <div class="product_head">
                                    <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                    <ul>
                                        <li><b>$33.80</b></li>
                                        <li>Hight Stretch</li>
                                    </ul>
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
            infinite: true,
            slidesToShow: window.screen.width < 700 ? 1 : 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>