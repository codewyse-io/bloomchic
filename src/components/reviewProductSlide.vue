<template>
    
<div class="off-canvas position-right" id="offCanvasReview">
    <div class="cart">
        <button class="close-button" aria-label="Close menu" type="button" @click="closeCart">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="main_slide_reviews">
            
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
   
        closeCart() {
            // Close the cart logic
            const offCanvasElement = document.getElementById('offCanvasReview');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.remove('is-open');
            }
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvasReview');
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
</style>