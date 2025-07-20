<template>
<!-- <button type="button" @click="toggleCart();"  >hello</button> -->

<div class="off-canvas position-right" id="offCanvasGuide">
    <div class="cart">
        <button class="close-button" aria-label="Close menu" type="button" @click="closeCart">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="main_guide">
            <h2> Size Guide & Model Info </h2>
            <div class="unit_switch">
                <h4>Unit Switch</h4>
                <ul>
                    <li><button :class="{ active: activeButton === 'IN' }" @click="toggleButton('IN')">IN</button></li>
                    <li><button :class="{ active: activeButton === 'CM' }" @click="toggleButton('CM')">CM</button></li>
                </ul>
                <div v-if="activeButton === 'IN'">
                    <div class="main_guide_contenthelo">
                        <h5>Model Info</h5>
                        <table class="border border-e3 w-full text-12 border-collapse custom-table mt-2 overflow-hidden">
                            <tbody>
                                <tr>
                                    <td class="w-1/5" rowspan="2">
                                        <div class="relative h-0 pb-[100%] overflow-hidden" bis_skin_checked="1"><img src="https://images-cdn.bloom.pub/model/Anna.jpg" class="object-cover">
                                            <div class="absolute left-0 w-full h-5 text-12 bg-opacity-90 text-white bg-666 flex justify-center items-center bottom-0" bis_skin_checked="1">12/L</div>
                                        </div>
                                    </td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Height</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Bust</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Waist</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Hips</td>
                                </tr>
                                <tr>
                                    <td class="text-center h-8 font-medium">5'6"</td>
                                    <td class="text-center h-8 font-medium">42.1"</td>
                                    <td class="text-center h-8 font-medium">31.2"</td>
                                    <td class="text-center h-8 font-medium">46.1"</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="border border-e3 w-full text-12 border-collapse custom-table mt-2 overflow-hidden">
                            <tbody>
                                <tr>
                                    <td class="w-1/5" rowspan="2">
                                        <div class="relative h-0 pb-[100%] overflow-hidden" bis_skin_checked="1"><img src="https://images-cdn.bloom.pub/model/Anna.jpg" class="object-cover">
                                            <div class="absolute left-0 w-full h-5 text-12 bg-opacity-90 text-white bg-666 flex justify-center items-center bottom-0" bis_skin_checked="1">12/L</div>
                                        </div>
                                    </td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Height</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Bust</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Waist</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Hips</td>
                                </tr>
                                <tr>
                                    <td class="text-center h-8 font-medium">5'6"</td>
                                    <td class="text-center h-8 font-medium">42.1"</td>
                                    <td class="text-center h-8 font-medium">31.2"</td>
                                    <td class="text-center h-8 font-medium">46.1"</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="next_tabs">
                        <ul>
                            <li><button :class="{ active: activeButton1 === 'Body' }" @click="toggleButton1('Body')"> Body Size </button></li>
                            <li><button :class="{ active: activeButton1 === 'Product' }" @click="toggleButton1('Product')"> Product Size </button></li>
                        </ul>
                        <div v-if="activeButton1 === 'Body'">
                            <div class="body_content">
                                <div class="switch_size">
                                    <h3>Size Switch</h3>
                                    <ul>
                                        <li><button>Us</button></li>
                                        <li><button>UK</button></li>
                                        <li><button>EU</button></li>
                                    </ul>
                                </div>
                                <div class="size-table">
                                    <table class="custom-table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Bust</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>M</td>
                                                <td>10</td>
                                                <td>38.2-40.2”</td>
                                                <td>31.9-33.9”</td>
                                                <td>42.1-44.1”</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>12</td>
                                                <td>40.2-42.1”</td>
                                                <td>33.9-36”</td>
                                                <td>44.1-46.1”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>14</td>
                                                <td>42.1-44.1”</td>
                                                <td>36-38.2”</td>
                                                <td>46.1-48”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>16</td>
                                                <td>44.1-46.1”</td>
                                                <td>38.2-40.2”</td>
                                                <td>48-50”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>18</td>
                                                <td>46.1-48”</td>
                                                <td>40.2-42.1”</td>
                                                <td>50-52”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>20</td>
                                                <td>48-50”</td>
                                                <td>42.1-44.1”</td>
                                                <td>52-53.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>22</td>
                                                <td>50-52”</td>
                                                <td>44.1-46.1”</td>
                                                <td>53.9-55.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>24</td>
                                                <td>52-53.9”</td>
                                                <td>46.1-48”</td>
                                                <td>55.9-57.9”</td>
                                            </tr>
                                            <tr>
                                                <td>4X</td>
                                                <td>26</td>
                                                <td>53.9-57.9”</td>
                                                <td>48-52”</td>
                                                <td>57.9-62”</td>
                                            </tr>
                                            <tr>
                                                <td>5X</td>
                                                <td>28</td>
                                                <td>57.9-62”</td>
                                                <td>52-55.9”</td>
                                                <td>62-65.9”</td>
                                            </tr>
                                            <tr>
                                                <td>6X</td>
                                                <td>30</td>
                                                <td>62-65.9”</td>
                                                <td>55.9-59.8”</td>
                                                <td>65.9-70.1”</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><em>* Depending on your body type and dressing habits, the above sizes are for reference only.</em></p>
                                </div>
                                <div class="body_measure">
                                    <h5>How to Measure your Body?</h5>
                                    <div class="full_measure">
                                        <ul>
                                            <li>
                                                <p><b>1.Your bust</b></p>
                                                <p>Measure the circumference over the fullest part of your breast.</p>
                                            </li>
                                            <li>
                                                <p><b>2. Your waist</b></p>
                                                <p>Measure your waist at the thinnest place.</p>
                                            </li>
                                            <li>
                                                <p><b>3. Your hips</b></p>
                                                <p>Measure the fullest part of your hips.</p>
                                            </li>
                                        </ul>
                                        <div class="side_img">
                                            <img :src="require('../assets/images/bodyMeasure.webp')" alt="">
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                                <div class="contact_d">
                                    <p>Need personalized help with sizing?</p>
                                    <button class="contact_us">Contact us</button>
                                </div>
                            </div>

                        </div>
                        <div v-else-if="activeButton1 === 'Product'">
                            <div class="body_content">
                                <div class="switch_size">
                                    <h3>Size Switch</h3>
                                    <ul>
                                        <li><button>Us</button></li>
                                        <li><button>UK</button></li>
                                        <li><button>EU</button></li>
                                    </ul>
                                </div>
                                <div class="size-table">
                                    <table class="custom-table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Bust</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>M</td>
                                                <td>10</td>
                                                <td>38.2-40.2”</td>
                                                <td>31.9-33.9”</td>
                                                <td>42.1-44.1”</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>12</td>
                                                <td>40.2-42.1”</td>
                                                <td>33.9-36”</td>
                                                <td>44.1-46.1”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>14</td>
                                                <td>42.1-44.1”</td>
                                                <td>36-38.2”</td>
                                                <td>46.1-48”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>16</td>
                                                <td>44.1-46.1”</td>
                                                <td>38.2-40.2”</td>
                                                <td>48-50”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>18</td>
                                                <td>46.1-48”</td>
                                                <td>40.2-42.1”</td>
                                                <td>50-52”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>20</td>
                                                <td>48-50”</td>
                                                <td>42.1-44.1”</td>
                                                <td>52-53.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>22</td>
                                                <td>50-52”</td>
                                                <td>44.1-46.1”</td>
                                                <td>53.9-55.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>24</td>
                                                <td>52-53.9”</td>
                                                <td>46.1-48”</td>
                                                <td>55.9-57.9”</td>
                                            </tr>
                                            <tr>
                                                <td>4X</td>
                                                <td>26</td>
                                                <td>53.9-57.9”</td>
                                                <td>48-52”</td>
                                                <td>57.9-62”</td>
                                            </tr>
                                            <tr>
                                                <td>5X</td>
                                                <td>28</td>
                                                <td>57.9-62”</td>
                                                <td>52-55.9”</td>
                                                <td>62-65.9”</td>
                                            </tr>
                                            <tr>
                                                <td>6X</td>
                                                <td>30</td>
                                                <td>62-65.9”</td>
                                                <td>55.9-59.8”</td>
                                                <td>65.9-70.1”</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><em>* Depending on your body type and dressing habits, the above sizes are for reference only.</em></p>
                                </div>
                                <div class="body_measure">
                                    <h5>How to Measure the Product's Size?</h5>
                                    <div class="full_measure">
                                        <ul>
                                            <li>
                                                <p><b>1.Waist
                                                    </b></p>
                                                <p>Measure straight across the narrowest waist line from edge to edge.
                                                </p>
                                            </li>
                                            <li>
                                                <p><b>2.Hips</b></p>
                                                <p>Measure straight across the widest hip line from edge to edge.</p>
                                            </li>
                                            <li>
                                                <p><b>3.Thigh</b></p>
                                                <p>Measure across straight from the crotch seam to the outside of the leg.</p>
                                            </li>
                                            <li>
                                                <p><b>4.Length
                                                    </b></p>
                                                <p>Measure from the waistband to the leg opening or hem.
                                                </p>
                                            </li>
                                            <li>
                                                <p><b>5.Inseam
                                                    </b></p>
                                                <p>Measure the length from the crotch seam to the bottom of the leg.</p>
                                            </li>
                                        </ul>
                                        <div class="side_img">
                                            <img :src="require('../assets/images/product_measure.webp')" alt="">
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                                <div class="contact_d">
                                    <p>Need personalized help with sizing?</p>
                                    <button class="contact_us">Contact us</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div v-else-if="activeButton === 'CM'">
                    <div class="main_guide_contenthelo">
                        <h5>Model Info</h5>
                        <table class="border border-e3 w-full text-12 border-collapse custom-table mt-2 overflow-hidden">
                            <tbody>
                                <tr>
                                    <td class="w-1/5" rowspan="2">
                                        <div class="relative h-0 pb-[100%] overflow-hidden" bis_skin_checked="1"><img src="https://images-cdn.bloom.pub/model/Anna.jpg" class="object-cover">
                                            <div class="absolute left-0 w-full h-5 text-12 bg-opacity-90 text-white bg-666 flex justify-center items-center bottom-0" bis_skin_checked="1">12/L</div>
                                        </div>
                                    </td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Height</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Bust</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Waist</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Hips</td>
                                </tr>
                                <tr>
                                    <td class="text-center h-8 font-medium">5'6"</td>
                                    <td class="text-center h-8 font-medium">42.1"</td>
                                    <td class="text-center h-8 font-medium">31.2"</td>
                                    <td class="text-center h-8 font-medium">46.1"</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="border border-e3 w-full text-12 border-collapse custom-table mt-2 overflow-hidden">
                            <tbody>
                                <tr>
                                    <td class="w-1/5" rowspan="2">
                                        <div class="relative h-0 pb-[100%] overflow-hidden" bis_skin_checked="1"><img src="https://images-cdn.bloom.pub/model/Anna.jpg" class="object-cover">
                                            <div class="absolute left-0 w-full h-5 text-12 bg-opacity-90 text-white bg-666 flex justify-center items-center bottom-0" bis_skin_checked="1">12/L</div>
                                        </div>
                                    </td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Height</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Bust</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Waist</td>
                                    <td class="w-1/5 bg-bg_f5 text-center h-8 font-medium">Hips</td>
                                </tr>
                                <tr>
                                    <td class="text-center h-8 font-medium">5'6"</td>
                                    <td class="text-center h-8 font-medium">42.1"</td>
                                    <td class="text-center h-8 font-medium">31.2"</td>
                                    <td class="text-center h-8 font-medium">46.1"</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="next_tabs">
                        <ul>
                            <li><button :class="{ active: activeButton1 === 'Body' }" @click="toggleButton1('Body')"> Body Size </button></li>
                            <li><button :class="{ active: activeButton1 === 'Product' }" @click="toggleButton1('Product')"> Product Size </button></li>
                        </ul>
                        <div v-if="activeButton1 === 'Body'">
                            <div class="body_content">
                                <div class="switch_size">
                                    <h3>Size Switch</h3>
                                    <ul>
                                        <li><button>Us</button></li>
                                        <li><button>UK</button></li>
                                        <li><button>EU</button></li>
                                    </ul>
                                </div>
                                <div class="size-table">
                                    <table class="custom-table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Bust</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>M</td>
                                                <td>10</td>
                                                <td>38.2-40.2”</td>
                                                <td>31.9-33.9”</td>
                                                <td>42.1-44.1”</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>12</td>
                                                <td>40.2-42.1”</td>
                                                <td>33.9-36”</td>
                                                <td>44.1-46.1”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>14</td>
                                                <td>42.1-44.1”</td>
                                                <td>36-38.2”</td>
                                                <td>46.1-48”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>16</td>
                                                <td>44.1-46.1”</td>
                                                <td>38.2-40.2”</td>
                                                <td>48-50”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>18</td>
                                                <td>46.1-48”</td>
                                                <td>40.2-42.1”</td>
                                                <td>50-52”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>20</td>
                                                <td>48-50”</td>
                                                <td>42.1-44.1”</td>
                                                <td>52-53.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>22</td>
                                                <td>50-52”</td>
                                                <td>44.1-46.1”</td>
                                                <td>53.9-55.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>24</td>
                                                <td>52-53.9”</td>
                                                <td>46.1-48”</td>
                                                <td>55.9-57.9”</td>
                                            </tr>
                                            <tr>
                                                <td>4X</td>
                                                <td>26</td>
                                                <td>53.9-57.9”</td>
                                                <td>48-52”</td>
                                                <td>57.9-62”</td>
                                            </tr>
                                            <tr>
                                                <td>5X</td>
                                                <td>28</td>
                                                <td>57.9-62”</td>
                                                <td>52-55.9”</td>
                                                <td>62-65.9”</td>
                                            </tr>
                                            <tr>
                                                <td>6X</td>
                                                <td>30</td>
                                                <td>62-65.9”</td>
                                                <td>55.9-59.8”</td>
                                                <td>65.9-70.1”</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><em>* Depending on your body type and dressing habits, the above sizes are for reference only.</em></p>
                                </div>
                                <div class="body_measure">
                                    <h5>How to Measure your Body?</h5>
                                    <div class="full_measure">
                                        <ul>
                                            <li>
                                                <p><b>1.Your bust</b></p>
                                                <p>Measure the circumference over the fullest part of your breast.</p>
                                            </li>
                                            <li>
                                                <p><b>2. Your waist</b></p>
                                                <p>Measure your waist at the thinnest place.</p>
                                            </li>
                                            <li>
                                                <p><b>3. Your hips</b></p>
                                                <p>Measure the fullest part of your hips.</p>
                                            </li>
                                        </ul>
                                        <div class="side_img">
                                            <img :src="require('../assets/images/bodyMeasure.webp')" alt="">
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                                <div class="contact_d">
                                    <p>Need personalized help with sizing?</p>
                                    <button class="contact_us">Contact us</button>
                                </div>
                            </div>

                        </div>
                        <div v-else-if="activeButton1 === 'Product'">
                            <div class="body_content">
                                <div class="switch_size">
                                    <h3>Size Switch</h3>
                                    <ul>
                                        <li><button>Us</button></li>
                                        <li><button>UK</button></li>
                                        <li><button>EU</button></li>
                                    </ul>
                                </div>
                                <div class="size-table">
                                    <table class="custom-table">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Bust</th>
                                                <th>Waist</th>
                                                <th>Hip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>M</td>
                                                <td>10</td>
                                                <td>38.2-40.2”</td>
                                                <td>31.9-33.9”</td>
                                                <td>42.1-44.1”</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>12</td>
                                                <td>40.2-42.1”</td>
                                                <td>33.9-36”</td>
                                                <td>44.1-46.1”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>14</td>
                                                <td>42.1-44.1”</td>
                                                <td>36-38.2”</td>
                                                <td>46.1-48”</td>
                                            </tr>
                                            <tr>
                                                <td>1X</td>
                                                <td>16</td>
                                                <td>44.1-46.1”</td>
                                                <td>38.2-40.2”</td>
                                                <td>48-50”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>18</td>
                                                <td>46.1-48”</td>
                                                <td>40.2-42.1”</td>
                                                <td>50-52”</td>
                                            </tr>
                                            <tr>
                                                <td>2X</td>
                                                <td>20</td>
                                                <td>48-50”</td>
                                                <td>42.1-44.1”</td>
                                                <td>52-53.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>22</td>
                                                <td>50-52”</td>
                                                <td>44.1-46.1”</td>
                                                <td>53.9-55.9”</td>
                                            </tr>
                                            <tr>
                                                <td>3X</td>
                                                <td>24</td>
                                                <td>52-53.9”</td>
                                                <td>46.1-48”</td>
                                                <td>55.9-57.9”</td>
                                            </tr>
                                            <tr>
                                                <td>4X</td>
                                                <td>26</td>
                                                <td>53.9-57.9”</td>
                                                <td>48-52”</td>
                                                <td>57.9-62”</td>
                                            </tr>
                                            <tr>
                                                <td>5X</td>
                                                <td>28</td>
                                                <td>57.9-62”</td>
                                                <td>52-55.9”</td>
                                                <td>62-65.9”</td>
                                            </tr>
                                            <tr>
                                                <td>6X</td>
                                                <td>30</td>
                                                <td>62-65.9”</td>
                                                <td>55.9-59.8”</td>
                                                <td>65.9-70.1”</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><em>* Depending on your body type and dressing habits, the above sizes are for reference only.</em></p>
                                </div>
                                <div class="body_measure">
                                    <h5>How to Measure the Product's Size?</h5>
                                    <div class="full_measure">
                                        <ul>
                                            <li>
                                                <p><b>1.Waist
                                                    </b></p>
                                                <p>Measure straight across the narrowest waist line from edge to edge.
                                                </p>
                                            </li>
                                            <li>
                                                <p><b>2.Hips</b></p>
                                                <p>Measure straight across the widest hip line from edge to edge.</p>
                                            </li>
                                            <li>
                                                <p><b>3.Thigh</b></p>
                                                <p>Measure across straight from the crotch seam to the outside of the leg.</p>
                                            </li>
                                            <li>
                                                <p><b>4.Length
                                                    </b></p>
                                                <p>Measure from the waistband to the leg opening or hem.
                                                </p>
                                            </li>
                                            <li>
                                                <p><b>5.Inseam
                                                    </b></p>
                                                <p>Measure the length from the crotch seam to the bottom of the leg.</p>
                                            </li>
                                        </ul>
                                        <div class="side_img">
                                            <img :src="require('../assets/images/product_measure.webp')" alt="">
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                                <div class="contact_d">
                                    <p>Need personalized help with sizing?</p>
                                    <button class="contact_us">Contact us</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            activeButton: 'IN',
            activeButton1: 'Body'
        };
    },
    methods: {
        toggleButton(button) {
            this.activeButton = button; // Set the active button
        },
        toggleButton1(button) {
            this.activeButton1 = button; // Set the active button
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
    }
};
</script>

<style scoped>
.off-canvas {
    width: 400px;
    height: 100%;
    /* Ensure the off-canvas menu fills the entire height */
    background-color: #fff;
    position: fixed;
    /* Ensure it stays fixed when scrolling */
    top: 0;
    right: 0;
    z-index: 1000;
    /* Ensure it appears above other content */
    transform: translateX(100%);
    /* Initially off-screen */
    transition: transform 0.3s ease;
    overflow-y: auto;
}

.off-canvas.is-open {
    transform: translateX(0);
    /* Slide in when 'is-open' class is applied */
}

.cart {
    padding: 20px;
}

button.close-button {
    position: absolute;
    left: unset;
    right: 6px;
    border: 0;
    background: white;
}

button.close-button span {
    font-size: 28px;
}

.cart .main_guide h2 {
    font-size: 21px;
    text-align: start;
    margin: 10px 0 20px 0;
}

.cart .main_guide .unit_switch {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.cart .main_guide .unit_switch h4 {
    font-size: 21px;
    font-weight: 600;
}

.cart .main_guide .unit_switch ul {
    display: flex;
    list-style: none;
    border: 0;
}

.cart .main_guide .unit_switch ul li button {
    border: 0;
    padding: 4px 10px 4px 10px;
}

.cart .main_guide .unit_switch ul li button.active {
    background: black;
    color: white;
}

.cart .main_guide .unit_switch .main_guide_contenthelo {
    margin: 10px 0 0 0;
    text-align: start;
}

.cart .main_guide .unit_switch .main_guide_contenthelo h5 {
    font-size: 21px;
    font-weight: 600;
}

.cart .main_guide .unit_switch .main_guide_contenthelo table.border.border-e3.w-full.text-12.border-collapse.custom-table.mt-2.overflow-hidden {
    font-size: .75rem;
    border-color: rgb(227 227 227 / var(--tw-border-opacity));
    overflow: hidden;
    border-width: 1px;
    width: 100%;
    box-shadow: 0 0 0 1px #e3e3e3;
    border-spacing: 1px;
}

.cart .main_guide .unit_switch .main_guide_contenthelo table.border.border-e3.w-full.text-12.border-collapse.custom-table.mt-2.overflow-hidden tbody tr td.w-1\/5 {
    width: 20%;
    border: 1px solid #808080 !important;
    background: #e3e3e3;
}

td.text-center.h-8.font-medium {
    height: 1rem;
    font-weight: 500;
    border: 1px solid #e3e3e3 !important;
}

img.object-cover {
    display: block;
    object-fit: cover;
    width: 100%;
    border: 0 none;
}

.relative.h-0.pb-\[100\%\].overflow-hidden {
    height: 62px;
}

body {
    font-family: Arial, sans-serif;
}

.size-table {
    margin-top: 20px;
    overflow-x: auto;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.custom-table th,
.custom-table td {
    padding: 8px;
    border: 1px solid #ddd;
}

.custom-table th {
    background-color: #f5f5f5;
}

.custom-table th,
.custom-table td {
    text-align: center;
}

.main_guide .next_tabs {
    margin: 20px 0 0 0;
    /* position: sticky; */
}

.main_guide .next_tabs ul {
    display: flex;
    padding: 0;
    justify-content: center;
    position: sticky !important;
}

.main_guide .next_tabs ul li button {
    background: white !important;
    color: black !important;
    font-size: 22px;
}

.main_guide .next_tabs ul li button.active {
    border-bottom: 2px solid black !important;
}

.main_guide .next_tabs .body_content .switch_size {
    display: flex;
    justify-content: space-between;
}

.main_guide .next_tabs .body_content .switch_size h3 {
    font-size: 25px;
    font-weight: 600;
}

.main_guide .next_tabs .body_content .switch_size ul li button {
    background: gray !important;
}

.main_guide .next_tabs .body_content .switch_size ul li button.active {
    background: black !important;
    color: white !important;
}

.body_content .body_measure {
    margin: 20px 0 0 0;
}

.body_content .body_measure h5 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 20px 0;
}

.body_content .body_measure .full_measure {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
}

.body_content .body_measure .full_measure .side_img {
    flex: 0 0 50%;
}

.body_content .body_measure .full_measure ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: start;
    flex: 0 0 40%;
}

.contact_d {
    margin: 10px 0 0 0;
    border-top: 1px solid black;
}

.contact_d p {
    margin: 20px 0 10px 0;
    font-size: 17px;
}

.contact_d button.contact_us {
    width: 100%;
    border: 0;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 10px;
}
</style>
