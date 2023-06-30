<template>
  <div class="product">
    <div class="product-image mb-3">
      <!-- Placeholder -->
      <div class="bg-white opacity-5 h-[180px] rounded-2xl"></div>
    </div>
    <div class="product-info flex items-center my-4">
      <h4 class="text-center">Example Product</h4>
      <span class="status-tag ml-auto">In Stock</span>
    </div>
    <button class="button-default gradient-bg">Purchase Now | $5.00</button>
  </div>
</template>
<style lang="scss" scoped>
  .product {
    @apply bg-deep p-4 rounded-3xl;
  }
  .product-info {
    @apply  mb-4;
    h4 {
      @apply text-white text-sm font-bold uppercase;
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
  button {
    @apply w-full justify-center hover:opacity-70 duration-200;
  }
</style>
<script>
export default {
  name: "Product",
};
</script>