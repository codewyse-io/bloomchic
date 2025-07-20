<template>
<div class="select_header">
    <!-- <div class="top_hea">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="anouce_bar">
                        <RouterLink to=''>25% off on expandable privacy trellises</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <header class="main">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-5">
                    
                </div>
                <div class="col-md-2">
                    <div class="logo">
                        <RouterLink to="/"> <img src="../assets/img/logo.webp" alt=""></RouterLink>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="cart-ad list_item">
                        <ul>

                            <li class="nav-item">
                                <RouterLink to="/LoginPage" class="nav-link" @click="closeNavbar"><i class="fa-regular fa-user"></i></RouterLink>
                            </li>
                            

                            <li class="nav-item">
                                <button type="button" class="btn btn-default navbar-btn" @click="openModal">
                                    <i class="fa-solid fa-magnifying-glass"></i>

                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <form class="navbar-form" role="search">
                                                    <!-- <h2>Search our products</h2> -->
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Search">
                                                        <button class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                    <!-- <button type=".submit" class="btn btn-default">Submit</button> -->
                                                </form>
                                                <div class="close_modal_btn">
                                                    <button type="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li class="nav-item">
                                <RouterLink to="/LoginPage"><i class="fa-regular fa-heart"></i></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="" @click="toggleCart()"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
          
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg new_nav ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/AboutUs"  @click="closeNavbar">About Us</RouterLink>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">New In</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swimwear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bottoms</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Loungewear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Accessories</RouterLink></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tops</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">T-Shirts</RouterLink></li>
                                                        </ul>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Feature</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plaids</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Boho</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Night Out</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Essential</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Floral</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Patchwork & Colorblock</RouterLink></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Best Sellers</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Shop by Occasion</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0 catetgories">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="list-group list-group-flush new_category">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/shop_cat_1.jpg')" alt=""> Everyday</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/shop_cat_2.webp')" alt=""> Work</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/shop_cat_3.webp')" alt=""> Vacation</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/shop_cat_4.webp')" alt="">Party </RouterLink></li>
        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/FAQS" @click="closeNavbar">Clothing</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                    <ul class="list-group list-group-flush first_one">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jeans</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jumpsuits</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Loungewear</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pocket Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Elegant Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Boho Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Knit Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Waist-Defined Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi Dresses</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tops</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sweatshirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tank Tops</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tunics</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bodysuits</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swimwear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">One-Pieces</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Tops</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Bottoms</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Sets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cover-Ups</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sweaters</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cardigans</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pullovers</RouterLink></li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outerwear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Coats</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jackets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blazers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wraps & & Kimonos</RouterLink></li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bottoms</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Skirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Leggings</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sweatpants</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shorts</RouterLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Dresses</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                    <ul class="list-group list-group-flush first_one">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Dresses</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Feature</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pocket Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Waist-Defined</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wedding Guest Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Floral & Printed dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sun Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Boho Dresses</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Occasion</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Everyday</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Work</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Vacation</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Party</RouterLink></li>
                                                       
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Length</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Midi</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Short</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Silhouette</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wrap</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">A-Line</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Fit & Flare</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shirt</RouterLink></li>

                                                        </ul>
                                                        <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Color</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Black</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Green</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pink</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blue</RouterLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Tops</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                    <ul class="list-group list-group-flush first_one">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Tops</RouterLink></li>
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tank Tops</RouterLink></li>
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tunics</RouterLink></li>

                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Supersoft T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cotton T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Striped T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Graphic T-Shirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Basics T-Shirts</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Anti-Wrinkle Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Elastic Waist</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Ruffle Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Work Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Solid Blouses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Print Blouses</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sweatshirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Sweatshirts</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Hoodies</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Zipper</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Outerwear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Outerwear</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jackets</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Blazers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Coats</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wraps & Kimonos</RouterLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Swimwear</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                    <ul class="list-group list-group-flush first_one">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New in Swimwear</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Category</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Dresses</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Tops</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">One-Pieces</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swim Bottoms</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cover-Ups</RouterLink></li>
                                                    </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Solutions</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">High-Waisted</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Fit & Flare</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tummy Control</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Adjustable</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Hip Minimizers</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bust Support</RouterLink></li>
                                                       </ul>
                                                    <ul class="list-group list-group-flush first_two">
                                                        <li class="first_head"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop by Featured</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Solid Color</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Boho</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">V-Neck</RouterLink></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Collection</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0 catetgories">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="list-group list-group-flush new_category">
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/collection1.webp')" alt="">Sunny Shore Adventures </RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/collection2.webp')" alt=""> Retro Racket Rumble</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/collection3.webp')" alt=""> My Nurturing Nature</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/collection4.webp')" alt=""> Tropic Fiesta</RouterLink></li>
                                                        <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar"><img :src="require('../assets/images/collection5.webp')" alt="">A Kaleidoscope of Love </RouterLink></li>
        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Spring Sale</RouterLink>
                                  
                                
                                </li>
                            </ul>

                          

                        </div>

                    </nav>
                </div>
            </div>
            <!-- <div class="search-container d-none">
                <i class="fas fa-search search-icon"></i>
                <input type="text" class="search-box" placeholder="Search">
            </div> -->
        </div>
    </header>

</div>
<router-view></router-view>
</template>

<script>
import {
    RouterLink
} from 'vue-router';

export default {
    name: 'HeaderView',
    props: {
        msg: String
    },
    components: {
        RouterLink
    },
    data() {
        return {
            isNavbarOpen: false,
        };
    },
    methods: {
        toggleClass() {
            const modal = document.getElementByClassName('dropdown-menu');
            if (modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        },
        openModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        closeModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbar() {
            this.isNavbarOpen = false;
            this.$nextTick(() => {
                if (this.$refs.navbarDropdown) {
                this.$refs.navbarDropdown.classList.remove('show');
        }});
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvas34');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
div#myModal .modal-content {
    width: 860px;
}

div#myModal .modal-dialog {width: 100%;left: 0;right: 0;display: flex;}

div#myModal .modal-content .modal-body {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

div#myModal .modal-content .modal-body form.navbar-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px 0 0 0;
}

div#myModal .modal-content .modal-body form.navbar-form .form-group {
    display: flex;
    width: 100%;
}

div#myModal .modal-content .modal-body .close_modal_btn {
    position: absolute;
    left: unset;
    right: 0;
    top: -8px;
    border: 0;
}

div#myModal .modal-content .modal-body .close_modal_btn button.close {
    border: 0;
    background: transparent;
    font-size: 30px;
}
</style>
