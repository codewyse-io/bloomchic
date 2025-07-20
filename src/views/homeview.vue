<template>
<HomeBanner />

<section class="sec_catef">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_category_sec">
                    <ul>
                        <li><a href=""><img :src="require('../assets/images/home_cat1.webp')" alt=""></a></li>
                        <li><a href=""><img :src="require('../assets/images/home_cat2.webp')" alt=""></a></li>
                        <li><a href=""><img :src="require('../assets/images/home_cat3.webp')" alt=""></a></li>
                        <li><a href=""><img :src="require('../assets/images/home_cat4.webp')" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<ShopConcept />
<BestSeller />
<DailyDrop />

<section class="sec_save">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="save_uptovoucher">
                    <img :src="require('../assets/images/saveupto.webp')" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<DocumentarySection />


<section class="about_tag">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="about_us_head">
                    <h2>About Us</h2>
                    <div class="about_s_m">
                      <a href="">  <img class="desktopView" :src="require('../assets/images/about_us.webp')" alt="">
                        <img class="d-none" :src="require('../assets/images/mob_about_us.webp.webp')">
                      </a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<ReviewSection />

<section class="second_last">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="seconlast-sec">
                    <ul>
                        <li>
                            <a href=""> <div class="contact">
                            <div class="icon">
                                <img :src="require('../assets/images/customer-service.png')" alt="">
                            </div>
                            <h6>Contact Us</h6>
                        </div>
                    </a>
                        </li>
                        <li>
                            <a href=""> <div class="contact">
                            <div class="icon">
                                <img :src="require('../assets/images/delivery-status.png')" alt="">

                            </div>
                            <h6>Free Returns</h6>
                        </div>
                    </a>
                        </li>
                        <li>
                            <a href=""> <div class="contact">
                            <div class="icon">
                                <img :src="require('../assets/images/money.png')" alt="">

                            </div>
                            <h6>Secure Payment</h6>
                        </div>
                    </a>
                        </li>
                        <li>
                            <a href=""> <div class="contact">
                            <div class="icon">
                                <img :src="require('../assets/images/delivery-van.png')" alt="">

                            </div>
                            <h6>Shipping info</h6>
                        </div>
                    </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />

</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue"
import ShopConcept from "@/components/ShopConcept.vue"
import BestSeller from "@/components/BestSeller.vue"
import DailyDrop from "@/components/DailyDrop.vue"
import DocumentarySection from "@/components/DocumentarySection.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'HomeView',
    components: {
        HomeBanner,
        ShopConcept,
        BestSeller, 
        DailyDrop,
        DocumentarySection,
        ReviewSection,
        FooterSection,       
    },
    methods:{
  
    }
   
};
</script>
