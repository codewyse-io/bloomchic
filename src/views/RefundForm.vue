


<template>
  <section class="sec_refund">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="refund_formm">
            <img :src="require('../assets/images/img_logistics.webp')">
            <p>Enter your order information to get started. Please note that the return window is 30 days from the date of receiving your item(s).</p>
            <form action="">
              <div class="fieldd">
                        <label for="orderNumber">Order Number</label>
                        <input type="text" name="orderNumber" id="orderNumber" placeholder="Enter Your Order Number">
                    </div>
                        <div class="fieldd">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email">
                    </div>
                   
                    <div class="sub_btn">
                        <input type="submit" value="Find My Order">
                    </div>
                    <a href="">About Return Policy</a> 
                    </form>
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
    
    