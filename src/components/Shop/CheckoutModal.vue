<template>
  <div>
    <transition name="fade" mode="out-in">
      <Modal width="500" v-if="checkoutOpen" @onClose="closeCheckout">
        <template #header>
          <div class="mb-3">
            <h1 class="text-xl font-bold text-white">Checkout</h1>
            <p class="text-white text-xs">
              Select a product from below and checkout!
            </p>
          </div>
        </template>

        <h2 class="text-green font-bold text-lg mb-1">
          {{ checkoutGroup.title }}
        </h2>
        <p class="text-white text-xs mb-7 leading-6">
          {{ checkoutGroup.description }}
        </p>
        <div class="relative mb-5">
          <button
            class="bg-deep text-white font-medium text-xs w-full py-4 rounded-lg flex gap-x-3 px-4"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <span v-if="selectedListing.product">
              {{ selectedListing.product.title }}
            </span>
            <span v-else> Select A Product </span>
            <span class="ml-auto"><i class="fas fa-chevron-down"></i></span>
          </button>
          <ul class="dropdown-wrapper absolute w-full" v-if="isDropdownOpen">
            <li
              v-for="el in checkoutGroup.listings"
              :key="el.product.id"
              @click="selectDropdown(el)"
            >
              <div>
                <h4>{{ el.product.title }}</h4>
                <h4 class="text-green" v-if="el.product.isInStock">In Stock</h4>
                <h4 class="text-[12px]" v-else>Out Of Stock</h4>
              </div>
              <span>${{ el.minPriceDetails.amount }}</span>
            </li>
          </ul>
        </div>
        <transition name="fade" mode="out-in">
          <p
            class="bg-deep border-blue border-l-2 text-xs text-white px-3 leading-5 py-2 mb-8"
            v-if="selectedListing.product"
          >
            {{ selectedListing.product.shortDescription }}
          </p>
        </transition>
        <button class="gradient-bg button-default w-full" @click="initCheckout">
          Purchase Now
        </button>
      </Modal>
    </transition>

    <div class="iframe-wrapper" v-if="checkoutIframe">
      <iframe
        @load="checkoutOpen = false"
        class="m-auto w-[95%] h-[100%]"
        style="display: none"
        onload="this.style.display = 'block';"
        :src="`https://altsworld.sellpass.io/embed/products/${selectedListing.path}`"
      ></iframe>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-component {
    .dropdown-wrapper {
      @apply bg-deep rounded-lg flex flex-col mt-4 divide-y divide-[#213c51];
      li {
        @apply text-white text-xs font-medium py-4 px-4 flex items-center cursor-pointer;
        span {
          @apply ml-auto;
        }
      }
    }
  }
  .button-default {
    @apply w-full justify-center mt-4;
    text-transform: none !important;
  }
  .iframe-wrapper {
    @apply fixed h-screen w-screen top-0 left-0 right-0 z-50;
    background-color: #000000a8;
  }
</style>
<script>
import { useRouter } from "vue-router";
import Modal from "@/components/Modal.vue";
import { useShopStore } from "@/stores/shop";
import { ref, onMounted } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const router = useRouter();
    const checkoutOpen = ref(false);
    const isDropdownOpen = ref(false);
    const selectedListing = ref({});
    const checkoutGroup = ref(null);
    const checkoutIframe = ref(null);
    const shop = useShopStore();
    shop.fetch().then(() => {
      if (router.currentRoute.value.query.checkout_group) {
        checkoutGroup.value = shop.listings.find(
          (el) => el.group.id == router.currentRoute.value.query.checkout_group
        ).group;
        checkoutOpen.value = true;
      }
    });
    //
    // Create event listener for Sellpass to close the iframe
    //
    onMounted(() => {
      window.addEventListener("message", (event) => {
        if (event.data === "close-embed") {
          checkoutIframe.value = false;
          router.push("/");
        }
      });
    });
    //
    // Display the iframe from Sellpass
    //
    function initCheckout() {
      checkoutIframe.value = true;
    }
    function closeCheckout() {
      checkoutOpen.value = false;
      setTimeout(() => {
        router.push("/");
      }, 500);
    }
    //
    // Select a product from the dropdown
    //
    async function selectDropdown(el) {
      selectedListing.value = el;
      isDropdownOpen.value = false;
    }
    return {
      router,
      checkoutOpen,
      isDropdownOpen,
      selectedListing,
      checkoutGroup,
      initCheckout,
      closeCheckout,
      checkoutIframe,
      selectDropdown,
    };
  },
};
</script>