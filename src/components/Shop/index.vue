<template>
  <div class="shop-component">
    <div class="container mx-auto">
      <h1 class="text-white text-center text-4xl font-bold mb-12">
        Shop All <span class="text-green">Accounts</span>
      </h1>

      <!-- Header -->
      <ShopHeader class="mb-12" />
      <!--  Products -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        v-if="!shop.loading"
      >
        <Product v-for="x in shop.listings" :key="x" :product="x" />
               <CheckoutModal
            v-if="router.currentRoute.value.query.checkout_group"
          />

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-component {
    @apply pt-24 pb-20;
  }
  .button-default {
    @apply w-full justify-center mt-4;
    text-transform: none !important;
  }
</style>
<script>
import { useRouter } from "vue-router";
import { ref, nextTick, onMounted } from "vue";
import { useShopStore } from "@/stores/shop";
import ShopHeader from "@/components/Shop/ShopHeader.vue";
import Modal from "@/components/Modal.vue";
import Product from "@/components/Shop/Product.vue";
import CheckoutModal from "@/components/Shop/CheckoutModal.vue";
export default {
  name: "Shop",
  components: {
    Product,
    ShopHeader,
    Modal,
    CheckoutModal,
  },
  setup() {
    const router = useRouter();
    const shop = useShopStore();
    shop.fetch();
    return {
      router,
      shop,
    };
  },
};
</script>