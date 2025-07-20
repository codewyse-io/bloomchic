<template>
  <section class="sec_1">
      <div class="home-slider">
        
          <ul ref="slider" class="slider"> 
              <li>
                  <img :src="require('../assets/images/documentry1.webp')" alt="">
              </li>
              <li>
                  <img :src="require('../assets/images/documentry2.webp')" alt="">
              </li>
          </ul>
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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:false,
        // Add more options as needed
      });
    },
  };
  </script>
  
  <style scoped>
  section.sec_1 .home-slider ul.slider.slick-initialized.slick-slider {
      padding: 40px 0;
      margin: 0;
      overflow-x: hidden;
  }
  .home-slider ul.slider li img {
    width: 90%;
    margin: 0 auto;
    border-radius: 30px;
}
  
  </style>
  