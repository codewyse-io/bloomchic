<template>
 <section class="track_order login_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_orderForm login_page">
                    <h2>Sign In</h2>
                    <ul>
                      <li><img :src="require('../assets/images/icon_vip_points.png')"> <p>Earn Points</p></li>
                      <li><img :src="require('../assets/images/icon_vip_birthgift.png')"> <p>Birthday Gift</p></li>
                      <li><img :src="require('../assets/images/icon_vip_coupon.png')"> <p>Coupons Reward</p></li>
                    </ul>
                    <form action="">
                        <div class="fieldd">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email">
                    </div>
                    <div class="fieldd hello">
                        <label for="Password">Password</label> <a href="">Forgot Password?</a>
                        <input type="password" name="Password" id="Password" placeholder="Enter Your Password">
                    </div>
                    <div class="sub_btn">
                        <input type="submit" value="Sign In">
                    </div>
                    <a href="">Create Account</a>
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