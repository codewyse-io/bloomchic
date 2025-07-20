<template>
<section class="Faqs_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="faqs_btn">
                    <button class="TrackOrder">Track My Order</button>
                    <button class="ContactUs">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
</section>  
<FaqsSection />
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
  