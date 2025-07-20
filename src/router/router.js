import { createRouter, createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import ProductCategory from "@/views/ProductCategory.vue";
import AboutUs from '@/views/AboutUs.vue';
import PayWithKlarna from '@/views/PayWithKlarna.vue';
import FAQS from '@/views/FAQS.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import AffiliatePage from '@/views/AffiliatePage.vue';
import ContactUs from '@/views/ContactUs.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import ReturnPolicy from '@/views/ReturnPolicy.vue';
import LoginPage from "@/views/LoginPage.vue";
import CreateAccount from "@/views/CreateAccount.vue";
import LostPassword from "@/views/LostPassword.vue";
import RefundForm from "@/views/RefundForm.vue";
import FraudFaqs from "@/views/FraudFaqs.vue";
import CopyrightNotice from "@/views/CopyrightNotice.vue";
import TeacherStudentPage from "@/views/TeacherStudentPage.vue";
import PaymentMethod from "@/views/PaymentMethod.vue";
import ShopConcept from "@/views/ShopConcept.vue";
import GiftCardPage from "@/views/GiftCardPage.vue";
import ShippingInfo from "@/views/ShippingInfo.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import ThePress from "@/views/ThePress.vue"
import SizeGuidePage from "@/views/SizeGuidePage.vue";
import AppDownload from "@/views/AppDownload.vue";
import TrackOrder from "@/views/TrackOrder.vue";
import LoyaltyPrograms from "@/views/LoyaltyPrograms.vue";


const routes = [

  {
    path: '/',
    component: homeview
  },
  {
    path: '/ProductCategory',
    component: ProductCategory, 
  },
  {
    path: '/AboutUs',
    component: AboutUs, 
  },
  {
    path: '/PayWithKlarna',
    component: PayWithKlarna, 
  },
  {
    path: '/FAQS',
    component: FAQS, 
  },
  {
    path: '/ProductDetails',
    component: ProductDetails, 
  },
  {
    path: '/AffiliatePage',
    component: AffiliatePage, 
  },
  {
    path: '/ContactUs',
    component: ContactUs, 
  },
  {
    path: '/TermsOfService',
    component: TermsOfService, 
  },
  {
    path: '/ReturnPolicy',
    component: ReturnPolicy, 
  },
  {
    path: '/LoginPage',
    component: LoginPage, 
  },
  {
    path: '/CreateAccount',
    component: CreateAccount, 
  },
  {
    path: '/LostPassword',
    component: LostPassword, 
  },
  {
    path: '/RefundForm',
    component: RefundForm, 
  },
  {
    path: '/FraudFaqs',
    component: FraudFaqs, 
  },
  {
    path: '/CopyrightNotice',
    component: CopyrightNotice, 
  },
  {
    path: '/TeacherStudentPage',
    component: TeacherStudentPage, 
  },
  {
    path: '/PaymentMethod',
    component: PaymentMethod, 
  },
  {
    path: '/ShopConcept',
    component: ShopConcept, 
  },
  {
    path: '/GiftCardPage',
    component: GiftCardPage, 
  },
  
  {
    path: '/ShippingInfo',
    component: ShippingInfo, 
  },
  {
    path: '/PrivacyPolicy',
    component: PrivacyPolicy, 
  },
  {
    path: '/ThePress',
    component: ThePress, 
  },
  {
    path: '/SizeGuidePage',
    component: SizeGuidePage, 
  },
  {
    path: '/AppDownload',
    component: AppDownload, 
  },
  {
    path: '/TrackOrder',
    component: TrackOrder, 
  },
  {
    path: '/LoyaltyPrograms',
    component: LoyaltyPrograms, 
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
});


export default router;
