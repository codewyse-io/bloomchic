<template>

<section class="sec_contactUs">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-7">
                <div class="contact_form">
                    <h2>We'd love to hear from you! </h2>
                    <p>If you have any questions, concerns, or even just compliments (we love those!), these are all equally great ways to reach out:</p>
                    <p><b>* Live Chat:</b> Our 24/7 live chat support is just a click away. Look for the chat icon located at the bottom right corner of our website. There, our dedicated support team can assist you in real-time.</p>
                    <p><b>* Email:</b> You can also connect with us by sending an email to <a href="mailto:support@bloomchic.us">support@bloomchic.us</a> -- or, by submitting a request below. If you choose this method, please remember that our replies sometimes find themselves in your junk/spam folder... so be on the lookout!</p>
                    <form action="">
                        <div class="twoField">
                            <div class="fieldd">
                                <label for="fname">First Name</label>
                                <input type="text" name="fname" id="fname" placeholder="Enter your first name">
                            </div>
                            <div class="fieldd">
                                <label for="fname">Last Name</label>
                                <input type="text" name="lname" id="lname" placeholder="Enter your last name">
                            </div>
                        </div>
                        <div class="fieldd">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter your email">
                        </div>
                        <div class="fieldd">
                            <label for="message">Message</label>
                        <textarea name="message" id="message" placeholder="Enter your message"></textarea>
                        </div>

                        <div class="fieldd">
                        <input type="submit" value="Submit">
                        </div>
                    </form>
                    <p><em>This website is operated by BLOOMCHIC LIMITED.</em></p>
                    <p><em>Office Address: UNIT 3A-8. 12/F KAISER CTR NO18 CENTRE ST SAI YING PUN HONG KONG</em></p>
                    <p class="mt-3"><b>* Social Media:  </b> Stay connected with us via social media for updates and gorgeous content, plus occasional promotions and giveaways! Find us at:</p>
                    <div class="socialsIcons">
                        <ul>
                            <li>
                                <a href="" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook: @bloomchicofficial</a>
                            </li>
                            <li>
                                <a href="" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram: @bloomchic</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="contactS_img">
                    <img :src="require('../assets/images/contact_us_side.webp')" alt="">
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
    name: 'ContactUs',
    components: {
        FooterSection,
    }
};
</script>

    
<style scoped>
.about_head h2 {
    text-align: start;
}
</style>
