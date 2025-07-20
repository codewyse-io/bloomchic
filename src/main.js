import "bootstrap/dist/css/bootstrap.css"
// import flatPickr from 'vue-flatpickr-component';


import { createApp } from 'vue'
import router from "@/router/router";
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"

// import 'vue-slick/dist/vue-slick.css'; 

const app = createApp(App);
app.use(router);
app.mount('#app');


  