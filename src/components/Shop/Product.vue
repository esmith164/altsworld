<template>
  <div class="product">
    <div class="product-image mb-3">
      <!-- Placeholder -->
      <img :src="`https://imagedelivery.net/${product.group.cfImageId}/productCard`" class="rounded-xl" />
    </div>
    <div class="product-info flex items-center my-4">
      <h4 class="text-center">{{ product.group.title }}</h4>
    </div>
    <router-link :to="`?checkout_group=${product.group.id}`"
      class="button-default gradient-bg"
    >
    
      Purchase Now | ${{ product.minPriceDetails.amount }}
  </router-link>
  </div>
</template>
<style lang="scss" scoped>
  .product {
    @apply bg-deep p-4 rounded-3xl;
  }
  .product-info {
    @apply mb-4;
    h4 {
      @apply text-white text-sm font-bold;
    }
    h5 {
      @apply text-white text-sm;
    }
    .status-tag {
      @apply bg-green text-[12px] text-white font-bold uppercase px-2 py-1 rounded ml-auto;
    }
  }
  .rating {
    @apply flex gap-x-1 mb-2;
    li {
      @apply text-xs text-[#FFC33C];
    }
  }
  a {
    @apply w-full justify-center hover:opacity-70 duration-200;
    text-transform: none !important;
  }
</style>
<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      product: props.product,
    }
  }
};
</script>