<template>
 <section class="track_order">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_orderForm">
                    <h2>BLOOMCHIC</h2>
                    <p>Order Tracking</p>
                    <form action="">
                        <div class="fieldd">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email">
                    </div>
                    <div class="fieldd">
                        <label for="orderNumber">Order Number</label>
                        <input type="text" name="orderNumber" id="orderNumber" placeholder="Enter Your Order Number">
                    </div>
                    <div class="sub_btn">
                        <input type="submit" value="Track">
                    </div>
                    <p><a href="">Sign in</a> to query more order information</p>
                    </form>
                    <a href="" class="mt-5">Continue shopping</a>
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

<style scoped>
.blog_detailss_content h5.mt-5 {
    text-align: center;
}

.blog_detailss_content .working_condtions ul li .working_condi_content h5 {
    font-size: 18px;
    margin: 14px 0 0 0;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe select {
    height: 40px;
}


.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox {
    flex: 0 0 100%;
    display: flex !important;
    flex-direction: row-reverse;
    padding: 0;
    margin: 0;
    justify-content: start;
    align-items: center;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox input[type="checkbox"] {
    margin: 0 10px 0 0px;
}
</style>