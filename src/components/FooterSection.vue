<template>
<footer class="footer_sec">
    <div class="container-fluid">
        <div class="row">
         <div class="col-md-12">
            <div class="footer_secc">
                <div class="footer_first">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>
                            <RouterLink to="/AboutUs">About Us</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ShopConcept">Shop The Concept</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ThePress">Press</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/PrivacyPolicy">Privacy Policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="PrivacyPolicy">Privacy Policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/CopyrightNotice">Copyright Notice</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/LoyaltyPrograms">Loyalty Program</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/AppDownload">Download Our APP</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer_first">
                    <h4>SUPPORT CENTER</h4>
                    <ul>
                        <li>
                            <RouterLink to="/FAQS">FAQs</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/FraudFaqs">Fraud FAQs</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ShippingInfo">Shipping Info</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/TrackOrder">Track My Order</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ReturnPolicy">Return Policy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ContactUs">Contact Us</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/ReturnPolicy">Start A Return</RouterLink>
                        </li>

                    </ul>
                </div>
                <div class="footer_first">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li>
                            <RouterLink to="/GiftCardPage">E-Gift Card</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/SizeGuidePage">Size Guide</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/PaymentMethod">Payment Method</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/PayWithKlarna">Pay With Klarna</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/AffiliatePage">Affiliate Program</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/TeacherStudentPage">Student and Key Workers Discount</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer_first">
                    <h4>BECOME A MEMBER</h4>
                    <ul>
                        <li>
                            <RouterLink to="/LoginPage"><img :src="require('../assets/images/join_free.webp')" alt=""></RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer_first">
                    <h4>SUBSCRIBE</h4>
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form action="">
                        <div class="input_container">
                            <input type="email" placeholder="Enter Your Email" required>
                            <button type="submit" class="icon_submit"><i class="fa-regular fa-envelope"></i></button>
                        </div>
                    </form>
                    <ul class="social_iconss">
                        <li>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fa-brands fa-tiktok"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="footer_first">
                    <h4>Download the BloomChic app</h4>
                    <p>Extra 20% Off Exclusive App Offer</p>
                    <div class="scan_sec">
                        <button class="appStore">
                            <i class="fa-brands fa-apple"></i>On the App Store
                        </button>
                        <button class="appStore">
                            <i class="fa-brands fa-google-play"></i>On the App Store
                        </button>
                        <div class="qr-code d-none">
                            <img :src="require('../assets/images/apple_store.png')" alt="">
                        </div>
                    </div>
                    <a href=""><div class="fed_back">
                        <h6><i class="fa-regular fa-comment"></i> Give Feedback</h6>
                        <p>We’d love to hear what you think!</p>
                    </div></a>
                </div>
            </div>
         </div>  
        </div>
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="last_payment">
                    <img :src="require('../assets/images/Payment-Methods.svg')" alt="">
                    <p><em>© 2024 BloomChic All Rights Reserved</em></p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
