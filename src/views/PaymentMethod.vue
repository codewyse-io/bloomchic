<template>
<section class="sec_privacy">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="privacy_policy_head paymentMethodd">
                    <h2>Payment Method</h2>

                    <h5>Pay With Paypal</h5>
                    <img :src="require('../assets/images/paie1.png')" class="paypal">
                    <p>When you place an order with Paypal you will be redirected to the PayPal payment page, where you can confirm your payment by logging in with your PayPal username and password.</p>
                    <p>You may still check out even without a PayPal account. To do so, please click on "Pay with Debit/Credit Card" and you’ll be redirected to a secure page where you can enter your credit card information or complete your payment safely via PayPal.</p>

                    <h5>Pay With Shopify Payments</h5>
                    <img :src="require('../assets/images/payment_method.png')" class="paypal">
                    <p>Shopify Payments is the simplest way to accept payments online. It eliminates the hassle of setting up a third-party payment provider or merchant account and having to enter the credentials into Shopify. With Shopify Payments you're free to use all major payment methods.</p>
                    <p>Please feel free to pay with Visa, Mastercard, American Express, Shop Pay, Apple Pay and Google Pay under Shopify Payments.</p>

                    <h5>Are my credit/debit card details secure?</h5>
                    <p>The security of BloomChic servers is closely monitored to prevent any unauthorized disclosure or use of credit card numbers and to protect the confidentiality of your personal information. And we use the SSL (Secure Socket Layer) industry standard, the highest level of security available today for web-secured applications.</p>
                    <p>Additionally, we are using Shopify Payments, one of the most secure payment processors available, which satisfies all six categories of PCI DSS requirements. Therefore, you can rest assured that your payment information is safe with us.</p>
                    <h5>Coupon Code</h5>
                    <p>You can apply coupons to your order at checkout. Once you’ve entered your coupon code, click “apply” and the discount will automatically adjust your order total. Please note that if you do not click ”apply” before continue checkout, your order total will not reflect coupon discount.</p>
                    <h5>NOTES:</h5>
                    <p>Please make sure that you enter the coupon code exactly as you received it, with no space before, within, or after it. To avoid errors, we recommend you to copy/paste the promotional code you received.</p>
                    <p>Coupons cannot be combined. You can only use one coupon code per order.</p>
                    <p>Coupons are subject to offer terms. This does exclude some items on our website which are not eligible for coupon discounts.</p>

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
