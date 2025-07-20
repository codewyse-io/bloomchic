<template>
<section class="review">
    <div class="container">
        <div class="row bg-color">
            <div class="col-md-12">
                <div class="reviews_sec">
                    <ul class="slider" ref="slider">
                        <li>
                            <p>
                                "We passionately believe that women should have the access to curate their own style and express themselves through fashion however they dream. She is the stylist."
                            </p>
                        </li>
                        <li>
                            <p>
                                "We passionately believe that women should have the access to curate their own style and express themselves through fashion however they dream. She is the stylist."
                            </p>
                        </li>
                        <li>
                            <p>
                                "We passionately believe that women should have the access to curate their own style and express themselves through fashion however they dream. She is the stylist."
                            </p>
                        </li>
                        <li>
                            <p>
                                "We passionately believe that women should have the access to curate their own style and express themselves through fashion however they dream. She is the stylist."
                            </p>
                        </li>
                    </ul>
                    <div class="second_ul">
                        <ul>
                            <li>
                                <img :src="require('../assets/images/logo-1.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/logo-2.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/logo-3.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/logo-4.webp')" alt="">
                            </li>
                        </ul>
                    </div>
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
            slidesToShow: window.screen.width < 700 ? 1 : 1,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>