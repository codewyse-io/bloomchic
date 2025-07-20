<template>
 <section class="appS">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main_app_download">
                        <h2>DOWNLOAD THE BLOOMCHIC APP TODAY! </h2>
                        <ul class="mt-5">
                            <li>
                                <div class="app_icon">
                                    <img :src="require('../assets/images/app1.webp')" alt="">
                                </div>
                                <div class="app_content">
                                    <h4>Stay in the Know</h4>
                                    <p>Get real-time tracking and delivery updates instantly.</p>
                                </div>
                            </li>
                            <li>
                                <div class="app_icon">
                                    <img :src="require('../assets/images/app2.webp')" alt="">
                                </div>
                                <div class="app_content">
                                    <h4>Seamless Shopping</h4>
                                    <p>Return your order with speed, ease and a smoother
                                        shopping experience.</p>
                                </div>
                            </li>
                            <li>
                                <div class="app_icon">
                                    <img :src="require('../assets/images/app3.webp')" alt="">
                                </div>
                                <div class="app_content">
                                    <h4>Exclusive Offers </h4>
                                    <p>Unlock extra 20% off, free shipping and more early
                                        bird access.</p>
                                </div>
                            </li>
                            <li>
                                <div class="app_icon">
                                    <img :src="require('../assets/images/app4.webp')" alt="">
                                </div>
                                <div class="app_content">
                                    <h4>Loyalty Rewarded</h4>
                                    <p>Align with your taste, style, and needs as a token of
                                        appreciation for your commitment.</p>
                                </div>
                            </li>
                        </ul>
                        <div class="scan_sec">
                            <button class="appStore">
                                <i class="fa-brands fa-apple"></i>On the App Store
                            </button>
                            <button class="appStore">
                                <i class="fa-brands fa-google-play"></i>On the App Store
                            </button>
                            <div class="qr-code d-none">
                                <img ::src="require('../assets//images/apple_store.png')" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<FooterSection />
</template>

    
<script>
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        FooterSection,
    }
};
</script>
