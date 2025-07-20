<template>

<section class="sec_concept">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="chop_concelpt">
                    <ul>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature1.webp')" alt="">
                            <h3>My Nurturing Nature</h3>
                            <p>April 21, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature2.webp')" alt="">
                            <h3>Tropic Fiesta</h3>
                            <p>April 11, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature3.webp')" alt="">
                            <h3>A Kaleidoscope of Love</h3>
                            <p>April 1, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature4.webp')" alt="">
                            <h3>Citrus Blossoms</h3>
                            <p>Mar 21, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature5.webp')" alt="">
                            <h3>BloomChic Celebrates 3 Years</h3>
                            <p>Mar 8, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature6.webp')" alt="">
                            <h3>Muse Spotlights</h3>
                            <p>Mar 8, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature7.webp')" alt="">
                            <h3>Wanderlust</h3>
                            <p>March 1, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature8.webp')" alt="">
                            <h3>The Aura Capsule</h3>
                            <p>Feb 19, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature9.webp')" alt="">
                            <h3>Ethereal Awakening</h3>
                            <p>Feb 1, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature10.webp')" alt="">
                            <h3>Island Rhapsody</h3>
                            <p>Jan 18, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature11.webp')" alt="">
                            <h3>Love: In Full Bloom</h3>
                            <p>Jan 3, 2024</p>
                        </a>
                        </li>
                        <li><a href="">
                            <img :src="require('../assets/images/mynature12.webp')" alt="">
                            <h3> I Am Enough: Unique By Design</h3>
                            <p>Jan 3, 2024</p>
                        </a>
                        </li>     <li><a href="">
                            <img :src="require('../assets/images/mynature13.webp')" alt="">
                            <h3>A Re-Imagining Bloomchic's New Era</h3>
                            <p>Jan 4, 2024</p>
                        </a>
                        </li>

                    </ul>
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
