<template>
<section class="sec_privacy">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="privacy_policy_head guide_sizee_page">
                    <h2>FIT LAB </h2>
                    <p>Fit: It's an aspect you care about most, yet can be the hardest for brands to get right.
                        <br>At BloomChic, this is a challenge we embrace: we're determined to get as close as we possibly can,
                        <br>and to keep making updates as we gather feedback from customers like you. We know that every body is unique.
                        <br>That's why, when we started our journey to make all of our products in sizes 10-30, fit with a capital F was in our minds from the very beginning.
                    </p>
                    <img :src="require('../assets/images/guide_size11.webp')">
                    <h4>Clothing</h4>
                    <img :src="require('../assets/images/guide_size12.webp')">
                    <h4>Jeans</h4>
                    <img :src="require('../assets/images/guide_size13.webp')">

                    <div class="video_guide">
                        <iframe width="560" height="315" :src="require('../assets/images/guide_size.mp4')" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p class="mt-3">The above size chart is a reference for measuring yourself for fit in any of our offerings.</p>
                    <p>For any questions about a specific product, you can reach out to our product team support@bloomchic.us</p>
                    <div class="email_btn">
                        <a href=""><button class="email_btns">Email Us</button></a>
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
