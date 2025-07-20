<template>
 <section class="track_order login_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_orderForm login_page create_login">
                    <h2>Create Account</h2>
                    <ul>
                      <li><img :src="require('../assets/images/icon_vip_points.png')"> <p>Earn Points</p></li>
                      <li><img :src="require('../assets/images/icon_vip_birthgift.png')"> <p>Birthday Gift</p></li>
                      <li><img :src="require('../assets/images/icon_vip_coupon.png')"> <p>Coupons Reward</p></li>
                    </ul>
                    <form action="">
                        <div class="fieldd">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="fname" placeholder="Enter Your First Name">
                    </div>
                    <div class="fieldd">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" placeholder="Enter Your Last Name">
                    </div>
                    <div class="fieldd">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email">
                    </div>
                    <div class="fieldd">
                        <label for="Password">Password</label>
                        <input type="password" name="Password" id="Password" placeholder="Enter Your Password">
                    </div>
                    <div class="sub_btn">
                        <input type="submit" value="Join In">
                    </div>
                    <div class="fieldd checkbox">
                      <input type="checkbox" name="agree" id="agree">
                      <label for="agree">I agree to  <a href=""> Privacy Policy.</a></label>
                    </div>
                    <div class="fieldd checkbox">
                      <input type="checkbox" name="sms" id="sms" checked>
                      <label for="sms">I’d like to receive exclusive offers and news by email or SMS.</label>
                    </div>
                    

                  </form>
                  <a href="">Already have an account?Sign In</a>
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