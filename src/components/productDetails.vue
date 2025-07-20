<template>
<section class="product_detail">
    <div class="container">
        <div class="row">
            <div class="col-md-6 main_staticc">
                <div class="main_row_images">
                    <div class="main_slider">
                        <ul class="slider navlistslider" ref="slider">
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                        </ul>
                        <ul class="slider1" ref="slider1">
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                        </ul>
                        <div class="fav-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="product_detail_content">
                    <h2>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</h2>
                    <div class="price">
                        <h4>$33.80</h4>
                    </div>
                    <div class="colors_combinations">
                        <div class="color_names">
                            <h3>colors: {{ selectedColor }}</h3>
                        </div>
                        <div class="colors">
                            <ul>
                                <li @click="changeColor('Gray')"><img :src="require('../assets/images/gray.webp')" alt=""></li>
                                <li @click="changeColor('Black')"><img :src="require('../assets/images/black.webp')" alt=""></li>
                            </ul>
                        </div>
                    </div>
                    <div class="us_size">
                        <div class="guide_size-info">
                            <button @click="toggleCart();" class="guide_sizes"><img src="https://cdn.shopify.com/s/files/1/0510/7171/3450/files/icon.svg?v=1699945758"> Size Guide & Model Info <i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                        <div class="btn_sizes">
                            <ul>
                                <li><button @click="Size('size10/M')" class="btn_size">10/M</button></li>
                                <li><button @click="Size('size12/L')" class="btn_size">12/L</button></li>
                                <li><button @click="Size('size14-16/1X')" class="btn_size">14-16/1X</button></li>
                            </ul>

                        </div>
                        <div class="main_size_cont">
                            <h6>Body</h6>
                            <ul>
                                <li><span>Bust: </span> {{ Bust }}</li>
                                <li><span>Waist: </span> {{ Waist }}</li>
                                <li><span>Hip: </span> {{ Hip }}</li>
                            </ul>
                            <h6>Product</h6>
                            <ul>
                                <li><span>Length: </span> {{ Length }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="add_cart_btn">
                        <button class="addtocart">ADD TO CART</button>
                    </div>
                    <div class="product_description">
                        <p><b>Description</b></p>
                        <p>Debuting Supersoft Essentials by BloomChic: the most luscious,ultra-plush essentials you've ever experienced. To create the perfect fiber blend, we scoured the world for top-notch materials partners and tested out thousands of iterations. The result is a silky smooth sensitive-skin friendly, four-way stretching fabric that drapes just-right and feels blissfully natural against your skin.</p>
                        <p><b>Fit & Sizing</b></p>
                        <ul>
                            <li><span>Stretch: </span>Medium stretch</li>
                            <li><span>Sleeve Length: </span>Sleeveless </li>
                            <li><span>Fit Type: </span>Regular Fit</li>
                        </ul>
                        <p><b>Product Details</b></p>
                        <ul>
                            <li><span>Season: </span>Spring </li>
                            <li><span>Color: </span>Gray,Black,ArmyGreen,Navy,Palemauve,Dirtypink,Mauve </li>
                            <li><span>Neckline: </span>Non</li>
                            <li><span>Sleeve Type: </span>Sleeveless </li>
                            <li><span>Pattern Type: </span>Plain </li>
                            <li><span>Pocket: </span>Side seam pocket</li>
                            <li><span>Belt: </span>No-belt</li>
                            <li><span>Closure Type: </span>Non</li>
                        </ul>
                        <p><b>Materials & Care</b></p>
                        <ul>
                            <li><span>Fabric Composition: </span>60% Polyester, 35% Rayon, 5% Spandex </li>
                            <li><span>Color: </span>Machine washable. With like colors. Turn inside out. Use gentle cycle. Do not tumble dry. Iron on low heat</li>
                        </ul>
                        <img :src="require('../assets/images/supersoft.jpg')" alt="">
                        <hr>

                    </div>
                    <div class="shipping_poli">
                        <p><b>Shipping & Returns</b></p>
                        <div class="btnns">
                            <a href=""><button class="delivery"><i class="fa-solid fa-truck-fast"></i> Delivery to United States</button></a>
                            <a href=""><button class="delivery"> Change Location<i class="fa-solid fa-chevron-right"></i></button></a>
                        </div>
                        <ul>
                            <li>
                                <p>Standard shipping: <b>$6.99</b> </p>
                                <p>Standard shipping: <b>$6.99</b> </p>
                                <p>Estimated delivery</p>
                                <p>May 14, 2024 - May 17, 2024.</p>
                            </li>
                            <li>
                                <p>Standard shipping: <b>$6.99</b> </p>
                                <p>Standard shipping: <b>$6.99</b> </p>
                                <p>Estimated delivery</p>
                                <p>May 14, 2024 - May 17, 2024.</p>
                            </li>
                        </ul>
                        <div class="btnns">
                            <a href=""><button class="delivery"><i class="fa-solid fa-truck-fast"></i> Delivery to United States</button></a>
                            <a href=""><button class="delivery"> Change Location<i class="fa-solid fa-chevron-right"></i></button></a>
                        </div>
                    </div>
                    <div class="reviews_clientss">
                        <p><b>Shipping & Returns</b></p>
                        <div class="btnns">
                            <a href=""><button class="delivery">All Reviews (17)</button></a>
                            <a href=""><button class="delivery"> Add Your Review<i class="fa-solid fa-chevron-right"></i></button></a>
                        </div>
                        <div class="main_reviews">
                            <div class="first_element">
                                <div class="rating_number">
                                    <h1>4.8</h1>
                                    <ul>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                    </ul>
                                </div>
                                <div class="rating_rate">
                                    <p>How did the item fit?</p>
                                    <div class="rating-bar">
                                        <div class="label">Too Small</div>
                                        <div class="bar"></div>
                                        <div class="percentage">0% <span>(0)</span></div>
                                    </div>
                                    <div class="rating-bar1">
                                        <div class="label">True to size</div>
                                        <div class="bar"></div>
                                        <div class="percentage">100% <span>(17)</span></div>
                                    </div>
                                    <div class="rating-bar">
                                        <div class="label">Too Large</div>
                                        <div class="bar"></div>
                                        <div class="percentage">0% <span>(0)</span></div>
                                    </div>

                                </div>
                                <hr>

                            </div>
                            <div class="second_element">
                                <div class="Clientname">
                                    <button class="bttnImg">0</button>
                                    <h3>Odeen</h3>
                                    <p><span>Purchased: </span>Indigo 18/2X</p>
                                </div>
                                <div class="cleint_date">
                                    <p>Apr 14, 2024</p>
                                    <ul>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                        <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_9895_9779)">
                                                    <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                    <!---->
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_9895_9779">
                                                        <rect width="12" height="12" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg> </li>
                                    </ul>
                                </div>
                                <div class="review_description">
                                    <p>Love these so much. I have a big booty but my waist is smaller. So the elastic works amazing so there isn’ a gap. I also like the length in these</p>
                                    <img :src="require('../assets/images/client_img.webp')">
                                    <div class="over_all">
                                        <ul>
                                            <li>Overall Fit： <b>True to Size</b></li>
                                            <li>Overall Fit： <b>True to Size</b></li>
                                            <li>Overall Fit： <b>True to Size</b></li>
                                        </ul>

                                    </div>
                                    <hr>
                                    <div class="view_all_review">
                                        <a href=""><button>View all reviews</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr>
                    <div class="also_cart">
                        <p><b>Also In Our Cart:</b></p>
                        <ul>
                            <li><img :src="require('../assets/images/product_slider.webp')"></li>
                            +
                            <li><img :src="require('../assets/images/product_slider.webp')"></li>
                            +
                            <li><img :src="require('../assets/images/product_slider.webp')"></li>

                        </ul>
                        <div class="total_price">
                            <p>Total price: <b>$78.40</b></p>
                        </div>
                        <button class="btn_add_cart addcart">Add Selected To Cart</button>
                        <form action="">
                            <div class="first">
                                <input type="checkbox" name="" id="item">
                                <label for="item">This item: Distressed Drawstring Roll Hem Denim Shorts</label>
                                <select id="mySelect">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select> <p><b>$27.80</b></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

export default {
    data() {
        return {
            selectedColor: 'Gray',
            Bust: '38.2-40.2"',
            Waist: '31.9-33.9"',
            Hip: '42.1-44.1"',
            Length: '50.6"'
        };
    },
    methods: {
        changeColor(color) {
            this.selectedColor = color;
        },
        Size(size) {
            if (size === 'size10/M') {
                this.Bust = '38.2-40.2"';
                this.Waist = '31.9-33.9"';
                this.Hip = '42.1-44.1"';
                this.Length = '50.6"';
            } else if (size === 'size12/L') {
                this.Bust = '40.2-42.1"';
                this.Waist = '33.9-36"';
                this.Hip = '44.1-46.1"';
                this.Length = '51.3"';
            } else if (size === 'size14-16/1X') {
                this.Bust = '42.1-46.1"';
                this.Waist = '36-40.2"';
                this.Hip = '46.1-50"';
                this.Length = '52"';
            }
        },
        closeCart() {
            // Close the cart logic
            const offCanvasElement = document.getElementById('offCanvasGuide');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.remove('is-open');
            }
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvasGuide');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        }

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

button.slick-next.slick-arrow::before {
    content: "\f077" !important;
    display: block;
    position: absolute;
    top: -280px;
    font-family: 'FontAwesome' !important;
    font-size: 32px;
    z-index: 9999;
    left: -90px;
    color: black;
}

button.slick-prev.slick-arrow::before {
    content: "\f077" !important;
    display: block !important;
    position: absolute !important;
    top: 130px !important;
    font-family: 'FontAwesome' !important;
    font-size: 32px !important;
    z-index: 9999 !important;
    left: 49px !important;
    color: black !important;
    rotate: 180deg !important;
}

.main_row_images .main_slider ul.slider1 li img {
    width: 100%;
    border-radius: 30px;
}

section.product_detail {
    padding: 60px 0;
}

.fav-icon {
    position: absolute;
    left: unset;
    right: 30px;
    top: 10px;
}

.main_row_images {
    position: relative;
}

.fav-icon svg {
    font-size: 28px;
}

.product_detail_content h2 {
    text-align: start;
    font-size: 35px;
    margin: 0 0 14px 0;
}

.product_detail_content .price {
    text-align: start;
}

.product_detail_content .price h4 {
    font-size: 35px;
    font-weight: 700;
}

.product_detail_content .colors_combinations {
    text-align: start;
}

.product_detail_content .colors_combinations .color_names h3 {
    font-size: 20px;
    margin: 0 0 20px 0;
}

.product_detail_content .colors_combinations .colors ul {
    display: flex;
    list-style: none;
    gap: 11px;
    padding: 0;
}

.product_detail_content .colors_combinations .colors ul li img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
}

.product_detail_content .us_size .guide_size-info button.guide_sizes {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    border: 0;
    padding: 4px 20px 4px 20px;
    border-radius: 10px;
    margin: 0 0 20px 0;
}

.product_detail_content .us_size .btn_sizes ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 11px;
}

.product_detail_content .us_size .btn_sizes ul li button {
    background: white;
    border-radius: 10px;
    padding: 4px 20px 4px 20px;
}

.product_detail_content .main_size_cont h6 {
    text-align: start;
    padding: 0 0 0 20px;
    font-size: 21px;
    font-weight: 700;
}

.product_detail_content .main_size_cont ul {
    display: flex;
    list-style: none;
    gap: 40px;
    padding: 0 0 0 20px;
}

.product_detail_content .main_size_cont {
    background: lightgray;
    padding: 6px 5px 6px 6px;
    border-radius: 11px;
}

.product_detail_content .add_cart_btn button.addtocart {
    width: 100%;
    margin: 20px 0 15px 0;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 10px;
}

.product_detail_content .product_description {
    text-align: start;
}

.product_detail_content .shipping_poli {
    text-align: start;
}

.product_detail_content .shipping_poli .btnns {
    display: flex;
    justify-content: space-between;
}

.product_detail_content .shipping_poli .btnns button.delivery {
    background: white;
    border: 0;
    margin: 0 0 10px 0;
}

.product_detail_content .shipping_poli .btnns button.delivery svg {
    padding: 0 10px 0 20px;
}

.product_detail_content .shipping_poli ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
}

.product_detail_content .shipping_poli ul li {
    background: #f5f5f5;
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
}

.product_detail_content .shipping_poli ul li p {
    margin: 0 0 4px 0;
}

.rating-bar {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    /* Equivalent to 14px */
    color: #000;
    margin-top: 0.25rem;
    /* Equivalent to 4px */
    line-height: 1rem;
    /* Equivalent to 16px */
}

.rating-bar .label {
    width: 20%;
    margin-right: -0.125rem;
    /* Equivalent to -2px */
}

.rating-bar .bar {
    height: 0.125rem;
    /* Equivalent to 2px */
    border-radius: 3px;
    overflow: hidden;
    flex-grow: 1;
    cursor: none;
    background: linear-gradient(to right, #000 0%, rgb(229, 229, 229) 0%);
}

.rating-bar .percentage {
    margin-top: 0.125rem;
    /* Equivalent to 2px */
    margin-left: 0.25rem;
    /* Equivalent to 4px */
    font-size: 0.625rem;
    /* Equivalent to 10px */
    width: 9%;
    color: #999;
    white-space: nowrap;
}

.rating-bar1 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    /* Equivalent to 14px */
    color: #000;
    margin-top: 0.25rem;
    /* Equivalent to 4px */
    line-height: 1rem;
    /* Equivalent to 16px */
}

.rating-bar1 .label {
    width: 20%;
    margin-right: -0.125rem;
    /* Equivalent to -2px */
}

.rating-bar1 .bar {
    height: 0.125rem;
    /* Equivalent to 2px */
    border-radius: 3px;
    overflow: hidden;
    flex-grow: 1;
    cursor: none;
    background: linear-gradient(to right, #000 100%, rgb(229, 229, 229) 100%);
}

.rating-bar1 .percentage {
    margin-top: 0.125rem;
    /* Equivalent to 2px */
    margin-left: 0.25rem;
    /* Equivalent to 4px */
    font-size: 0.625rem;
    /* Equivalent to 10px */
    width: 9%;
    color: #999;
    white-space: nowrap;
}

.product_detail_content .reviews_clientss {
    text-align: start;
    margin: 20px 0 0 0;
}

.product_detail_content .reviews_clientss .btnns {
    display: flex;
    justify-content: space-between;
}

.product_detail_content .reviews_clientss .btnns button {
    border: 0;
    background: transparent;
    margin: 0 0 20px 0;
}

.product_detail_content .reviews_clientss .btnns button svg {
    padding: 0 0px 0 20px;
}

.product_detail_content .reviews_clientss .main_reviews {
    background: #f8f8f8;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number h1 {
    font-size: 51px;
    font-weight: 700;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    gap: 5px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number ul li svg {
    width: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate {
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate p {
    font-size: 20px;
    font-weight: 600;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate .rating-bar {
    width: 100%;
    padding: 0;
}

.rating-bar1 .bar {
    height: 10px !important;
}

.rating-bar1 .bar hr {
    width: 100%;
    color: black;
    background: black;
}

.product_detail_content .reviews_clientss .main_reviews .second_element {
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0 0 0;
    border-top: 1px solid black;
    padding-top: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 50%;
}

button.bttnImg {}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname button.bttnImg {
    background: gray;
    border: 0;
    border-radius: 20px;
    width: 40px;
    height: 40px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname h3 {
    margin: 0 0px 0 10px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname p {
    flex: 0 0 100%;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date {
    flex: 0 0 45%;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date ul {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    gap: 10px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date p {
    margin: 0 0 0 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date ul li svg {
    width: 25px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description {
    margin: 10px 0 0 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description p {
    font-size: 17px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description img {
    border-radius: 10px;
    margin: 0 0 10px 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description ul li {
    margin: 0px 50px 10px 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description .view_all_review {
    display: flex;
    justify-content: center;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description .view_all_review button {
    text-align: center;
    border: 0;
    background: transparent;
    font-size: 20px;
}

.product_detail_content .also_cart {
    text-align: start;
}

.product_detail_content .also_cart ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 11px;
    font-size: 19px;
}
.product_detail_content .also_cart .total_price {
    display: flex;
    justify-content: center;
}

.product_detail_content .also_cart button.btn_add_cart.addcart {
    width: 100%;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 20px;
    margin: 0 0 20px 0;
}


.product_detail_content .also_cart form .first {
    display: flex;
    flex-wrap: wrap;
}

.product_detail_content .also_cart form .first input {
    flex: 0 0 3%;
    margin: 0px 0 10px 0;
}

.product_detail_content .also_cart form .first label {
    flex: 0 0 88%;
    margin: 0px 0 10px 0;
}

.product_detail_content .also_cart form .first select {
    flex: 0 0 30%;
    display: flex;
    align-items: center;
    height: 30px;
}
.col-md-6.main_staticc {
    position: sticky;
    top: 30px;
    height: 100vh;
}
</style>
