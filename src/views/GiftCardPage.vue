<template>
<section class="product_detail">
    <div class="container">
        <div class="row">
            <div class="col-md-6 main_staticc">
                <div class="main_row_images">
                    <div class="main_slider">
                        <ul class="slider navlistslider" ref="slider">
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                        </ul>
                        <ul class="slider1" ref="slider1">
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/Gift_card.webp')" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="gift_card">
                    <h2>BloomChic Gift Card</h2>
                    <div class="price_gift">
                        <h4>{{ price}}</h4>
                        <ul>
                            <li><button @click="changePrice('$50')" :class="{ 'activate': price === '$50' }">$50</button></li>
                            <li><button @click="changePrice('$100')" :class="{ 'activate': price === '$100' }">$100</button></li>
                            <li><button @click="changePrice('$200')" :class="{ 'activate': price === '$200' }">$200</button></li>
                            <li><button @click="changePrice('$500')" :class="{ 'activate': price === '$500' }">$500</button></li>
                        </ul>

                    </div>
                    <div class="send_gift_card">
                        <button class="sendGift" @click="openModal2">Send As A Gift</button>
                        <!-- hello -->
                        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <h2>Let's send your gift card!</h2>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <flat-pickr :config="flatpickrConfig"></flat-pickr>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="images_slider"></div>
                                                <img :src="require('../assets/images/Gift_card.webp')">
                                            </div>

                                        </div>
                                        <div class="close_modal_btn">
                                            <button type="button" class="close" @click="closeModal2"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6>Description</h6>
                    <p>Shopping for friends and family, but not sure what to give them? Give the gift of choice with a BloomChic gift card. BloomChic E-Gift cards can be ordered online and delivered via email to anyone you choose. Simply select a value ($50, $100, $200, or $500), and include your personalized message.</p>
                    <h6>Product Details</h6>
                    <p>To purchase an E-Gift card: <br> 1. Select the gift card amount and click 'Send As A Gift.'
                        <br>2. Choose the delivery method — Email, Facebook Messenger, or printable.
                        <br>3. Enter the recipient's name, email address, and a custom message.<br>4. Choose between immediate delivery or a future date, and select your gift card design — then add to cart and check out.
                        <br>5. You'll receive a notification once the recipient opens the gift card (delivered immediately, or at 6AM ET on the date you schedule).If purchasing for multiple recipients, be sure to purchase each gift card individually.
                        <br>6. Note: Gift cards do not support discount code payments.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

<script>
import FooterSection from "@/components/FooterSection.vue"

import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';


export default {
    name: 'ProductCategory',
    components: {
        FooterSection,
        flatPickr,
    },
    data() {
        return {
            price: '$50',
            flatpickrConfig: {
        inline: true, // Display the calendar inline
        onChange: this.handleDateChange // Call the method when a date is selected
      }
        }
    },
    methods: {
        changePrice(newPrice) {
            this.price = newPrice; // Update the price when a button is clicked
        },
        handleDateChange(selectedDates) {
      // You can access the selected date from the selectedDates array
      const selectedDate = selectedDates[0];
      // Do something with the selected date, for example, store it in a variable
      console.log("Selected Date:", selectedDate);
    },
        openModal2() {
            const modal = document.getElementById('myModal2');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        closeModal2() {
            const modal = document.getElementById('myModal2');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
    },
    mounted() {
        // Initialize Slick Slider
        jquery(this.$refs.slider).slick({
            // Slick Slider options
            infinite: true,
            slidesToShow: window.screen.width < 700 ? 3 : 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            slidesPerRow: 1,
            asNavFor: '.slider1',
            focusOnSelect: true,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
        jquery(this.$refs.slider1).slick({
            // Slick Slider options
            autoplay: true,
            slidesToShow: window.screen.width < 700 ? 1 : 1,
            vertical: true,
            slidesPerRow: 1,
            asNavFor: '.slider',
            focusOnSelect: true,
            arrows: false,
            responsive: []
            // Add more options as needed
        });
        jquery('#datepicker').datepicker();

    },
};
</script>

<style scoped>
.main_row_images .main_slider ul.slider {
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
}

.main_row_images .main_slider ul.slider li {
    display: flex;
    margin: 0 0 20px 0;
}

.main_row_images .main_slider ul.slider li img {
    width: 80px;
    height: 107px;
}

.main_row_images .main_slider {
    display: flex;
    padding: 0;
    justify-content: center;
}

.main_row_images .main_slider ul.slider {
    flex: 0 0 20%;
}

.main_row_images .main_slider ul.slider1 {
    padding: 0;
    margin: 0;
}

.main_row_images .main_slider ul.slider1 li img {
    width: 100%;
    border-radius: 30px;
}

section.product_detail {
    padding: 60px 0;
}

.modal-content {
    width: 800px !important;
    margin: 0 auto !important;
    left: -110px;
}
.modal-body h2 {
    text-align: center;
    margin: 10px 0 30px 0;
}

input.flatpickr-input {
    visibility: hidden;
}

.flatpickr-calendar.animate.inline {
    top: -30px;
    width: 100%;
}

.images_slider img {
    width: 100%;
}

.images_slider img {width: 100%;}

.close_modal_btn {
    position: absolute;
    top: 6px;
    left: unset;
    right: 5px;
}

.close_modal_btn button.close {
    border: 0;
    background: transparent;
    font-size: 32px;
}
</style>
