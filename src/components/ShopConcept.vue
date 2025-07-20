<template>
 <section class="sec_conceptShop">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="Shop_cont">
                <h2>Shop The Concept</h2>
            <ul class="slider" ref="slider">
                <li><a href=""><img :src="require('../assets/images/shop_concept1.webp')" alt=""></a></li>
                <li><a href=""><img :src="require('../assets/images/shop_concept2.webp')" alt=""></a></li>
                <li><a href=""><img :src="require('../assets/images/shop_concept3.webp')" alt=""></a></li>
                <li><a href=""><img :src="require('../assets/images/shop_concept1.webp')" alt=""></a></li>
                <li><a href=""><img :src="require('../assets/images/shop_concept1.webp')" alt=""></a></li>
                <li><a href=""><img :src="require('../assets/images/shop_concept1.webp')" alt=""></a></li>
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
                slidesToShow: window.screen.width < 700 ? 1 : 3.5,
                slidesToScroll: 1,
                arrows: true,
                responsive: []
                // Add more options as needed
            });
        },
    };
    </script>

  <style scoped>

</style>