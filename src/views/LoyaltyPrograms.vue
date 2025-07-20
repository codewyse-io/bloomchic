<template>

<section class="loyalty_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_layalty_sec">
                    <img :src="require('../assets/images/bloompic.webp')" alt="">
                    <h2>BloomJourney - Member Rewards</h2>
                    <p class="mt-5">Join our journey to earn points, unlock exclusive gifts <br>and redeem rewards and so much more!</p>
                    <div class="loyalty_btns">
                        <a href=""><button class="joinNOw">Joins Now</button></a>
                        <a href=""><button class="joinNOw">Log In</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="sec_loyalty2">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="maintable_sec">
                    <h2>The BloomChic Journey Perks</h2>
                    <img class="desktopView" :src="require('../assets/images/loyalty_table.webp')" alt="">
                    <img class="d-none" :src="require('../assets/images/mob_loyalty_table.webp')" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="sec_loyalty3">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_how_its_works">
                    <h2>How It Works</h2>
                    <img class="desktopView" :src="require('../assets/images/how_its_work.webp')" alt="">
                    <img class="d-none" :src="require('../assets/images/mob_how_its_work.png')" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="sec_loyalty4 faqs">
   <FaqsSection />
</section>

<FooterSection />
</template>

<script>
import FaqsSection from "@/components/FaqsSection.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        FaqsSection,
        FooterSection,
    }
};
</script>
