<template>
<section class="product_list">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="filter-product">
                    <h2>Filter</h2>
                    <hr>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Size
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="sizes">10/M</button></li>
                                            <li><button class="sizes">12/L</button></li>
                                            <li><button disabled class="sizes">12/L</button></li>
                                            <li><button class="sizes">14-16/1X</button></li>
                                            <li><button disabled class="sizes">16/1X</button></li>
                                            <li><button disabled class="sizes">18/2X</button></li>
                                            <li><button class="sizes">18-20/2X</button></li>
                                            <li><button disabled class="sizes">20/2X</button></li>
                                            <li><button disabled class="sizes">22/3X</button></li>
                                            <li><button class="sizes">22-24/3X</button></li>
                                            <li><button class="sizes">26/4X</button></li>
                                            <li><button class="sizes">28/5X</button></li>
                                            <li><button class="sizes">30/6X</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Price
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input_ranges">
                                        <form action="">
                                            <div class="input_gie">
                                                <input type="text" id="volumeText" name="volumeText" :value="volumeValue">
                                                <input type="text" id="volumeText" name="volumeText" :value="volumeValue2">
                                            </div>
                                            <input type="range" id="volume" name="volume" min="1" max="100" v-model="volumeValue">

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Color
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="colors_select">
                                        <ul>
                                            <li><span class="white"></span>White</li>
                                            <li><span class="black"></span>black</li>
                                            <li><span class="green"></span>green</li>
                                            <li><span class="lightgreen"></span>Light Green</li>
                                            <li><span class="white"></span>White</li>
                                            <li><span class="black"></span>black</li>
                                            <li><span class="green"></span>green</li>
                                            <li><span class="lightgreen"></span>Light Green</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Category
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Dresses">Dresses</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Style
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Style">Elegant</button></li>
                                            <li><button class="Style">Casual</button></li>
                                            <li><button class="Style">Work From Home</button></li>
                                            <li><button class="Style">At the Office</button></li>
                                            <li><button class="Style">Resort</button></li>
                                            <li><button class="Style">Formal</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading1">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    Trends
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Trends">Texture</button></li>
                                            <li><button class="Trends">Elastic cuffs</button></li>
                                            <li><button class="Trends">Embroidered</button></li>
                                            <li><button class="Trends">Waffle Knit</button></li>
                                            <li><button class="Trends">Button</button></li>
                                            <li><button class="Trends">Wrap</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Pocket
                                </button>
                            </h2>
                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="pocket">Pockets</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    Dresses Length
                                </button>
                            </h2>
                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Dress_lenght">Knee Dress</button></li>
                                            <li><button class="Dress_lenght">Midi Dress</button></li>
                                            <li><button class="Dress_lenght">Long Dress</button></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                    Belt
                                </button>
                            </h2>
                            <div id="collapse4" class="accordion-collapse collapse " aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Belt">Belt</button></li>
                                            <li><button class="Belt">No-belt</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                    Material
                                </button>
                            </h2>
                            <div id="collapse5" class="accordion-collapse collapse " aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="Material">Cotton</button></li>
                                            <li><button class="Material">Rayon</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <ProductList />
            </div>
        </div>
    </div>
</section>
<FooterSection />
</template>

  
<script>
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        ProductList,
        FooterSection,
    },
    data() {
        return {
            volumeValue: 1,
            volumeValue2: 400,
        }
    },
    watch: {
        volumeValue(newValue) {
            // Ensure newValue is a number
            const volume = parseInt(newValue);
            this.volumeValue = isNaN(volume) ? 1 : Math.min(Math.max(volume, 1), 100);
        }
    },
};
</script>
