<template>
<section class="teacher_health">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="std_workd_discount">
                    <h2>Student, Teacher & Healthcare Worker Discount</h2>
                    <div class="main_form">
                        <div class="std_img">
                            <img :src="require('../assets/images/std_workd_discount.jpeg')" alt="">
                        </div>
                        <div class="std_form" :class="{ 'newClass': addedClass }">
                            <div class="First_tab">
                                <h4>Unlock Your Exclusive Discount at BloomChic</h4>
                                <p>We’ve teamed up with Student Beans and Beans iD to offer exclusive discounts to the following groups. Click through to verify and receive your discount for free!</p>
                                <ul>
                                    <li><button @click="addNewClass" class="discount_"><span><svg width="24px" height="24px" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" class="css-1xdhyk6"><path d="M13.8015 1H2.19848C1.53658 1 1 1.53658 1 2.19848V9.18821C1 9.85011 1.53658 10.3867 2.19848 10.3867H13.8015C14.4634 10.3867 15 9.85011 15 9.18821V2.19848C15 1.53658 14.4634 1 13.8015 1Z" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.08826 3.74857H11.2841" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.08826 5.04827H11.2841" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.08826 6.34937H13.2542" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.08826 7.65041H13.2542" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.60214 7.65044H2.72107V7.08951C2.72107 5.64067 4.58582 6.43555 4.58582 5.23023V4.93472C4.78009 5.04964 4.97437 5.10163 5.18232 5.10163C5.39028 5.10163 5.58455 5.03733 5.77882 4.93472V5.23023C5.77882 6.44786 7.64358 5.65298 7.64358 7.10182V7.65044H3.60214Z" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.20005 5.88281C5.89066 5.88281 6.45051 5.32296 6.45051 4.63235C6.45051 3.94173 5.89066 3.38188 5.20005 3.38188C4.50944 3.38188 3.94958 3.94173 3.94958 4.63235C3.94958 5.32296 4.50944 5.88281 5.20005 5.88281Z" stroke="#071F45" stroke-width="0.547249" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span>Student Discount</span><span><i class="fa-solid fa-chevron-right"></i></span></button></li>
                                    <li><button @click="addNewClass" class="discount_"><span><svg width="24px" height="24px" role="img" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-1xdhyk6"><path d="M32.8099 23.0916C33.9376 17.0115 40.1007 12.4832 46.2332 14.4764C54.6823 17.2214 55.1412 28.2974 50.6479 34.4693C46.1545 40.6498 39.1915 47.3768 32.8099 51.468C26.4326 47.3768 19.3123 40.6498 14.8189 34.4693C10.3299 28.2931 10.7845 17.2214 19.2336 14.4764C25.3661 12.4832 31.6865 17.0115 32.8099 23.0916Z" fill="white" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44.144 33.4986H41.8536L40.3106 28.5856L37.4695 37.4718L34.8556 29.7483L32.4822 41.7423L29.9033 27.1694L27.167 37.4718L24.9859 30.5001L23.3031 33.4986H21.0127" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span>Healthcare Discount</span><span><i class="fa-solid fa-chevron-right"></i></span></button></li>
                                    <li><button @click="addNewClass" class="discount_"><span><svg width="24px" height="24px" role="img" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="css-1xdhyk6"><path d="M49.7294 20.1863H51.8012C52.3214 20.1863 52.7454 20.6103 52.7454 21.1304V46.7837C52.7454 47.3039 52.3214 47.7279 51.8012 47.7279H39.8641H28.6875H13.9441C13.424 47.7279 13 47.3039 13 46.7837V21.1304C13 20.6103 13.424 20.1863 13.9441 20.1863H49.7294Z" fill="white" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.8618 46.4386V19.9854C32.8618 19.8586 32.8269 19.7406 32.7613 19.6313C32.3767 19.0107 30.8293 17 26.8648 17H16.8509C16.4838 17 16.1865 17.2972 16.1865 17.6644V42.19C16.1865 42.5572 16.4838 42.8544 16.8509 42.8544H21.6109C25.4486 42.8544 29.8415 44.0695 32.6345 46.797C33.0848 47.2385 32.7963 46.9194 32.8618 46.4342V46.4386Z" fill="white" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.8794 46.7794V20.0989C32.8794 19.9722 32.9143 19.8541 32.9799 19.7449C33.3645 19.1242 34.9119 17.1135 38.8763 17.1135H48.8903C49.2574 17.1135 49.5547 17.4108 49.5547 17.7779V42.3035C49.5547 42.6707 49.2574 42.9679 48.8903 42.9679C47.3036 42.9679 45.7169 42.9679 44.1303 42.9679C40.2925 42.9679 35.8997 44.183 33.1066 46.9105C32.6564 47.352 32.9449 47.2602 32.8794 46.775V46.7794Z" fill="white" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4963 36.8618H28.9061" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4963 32.3638H28.9061" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4963 27.8662H28.9061" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4963 23.373H28.9061" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.2535 36.8618H36.8394" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.2535 32.3638H36.8394" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.2535 27.8662H36.8394" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45.2535 23.373H36.8394" stroke="#071F45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span>Teacher Discount</span><span><i class="fa-solid fa-chevron-right"></i></span></button></li>
                                </ul>
                            </div>
                            <div class="second_tab" >
                                <h2>15% Healthcare Discount at BloomChic</h2>
                                <a href="">See discount Terms & Conditions</a>
                                <hr>
                                <h4>How to get your code</h4>
                                <ul>
                                    <li><span>1</span><span>Create a free Beans iD account.</span></li>
                                    <li><span>2</span><span>Verify your employment status.</span></li>
                                    <li><span>1</span><span>Reveal and enter your code at checkout.</span></li>
                                </ul>
                                <button class="sing_login">Sign up/Log in</button>
                            </div>
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
    },
    data() {
    return {
      addedClass: false
    };
  },
  methods: {
    addNewClass() {
      this.addedClass = true;
    }
  }
};
</script>
