<template>
 <section class="track_order login_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_orderForm login_page">
                    <h2>Reset Your Password</h2>
                    <p>We will send you an email to reset your password.</p>
                    
                    <form action="">
                        <div class="fieldd">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email">
                    </div>
                   
                    <div class="sub_btn">
                        <input type="submit" value="Submit">
                    </div>
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
      name: 'AboutUs',
      components: {
        FooterSection,
      }
  };
  </script>