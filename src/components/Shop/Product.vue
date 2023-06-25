<template>
  <div class="product">
    <div class="product-image mb-6">
      <!-- Placeholder -->
      <div class="bg-deep h-[200px] rounded-2xl"></div>
    </div>
    <div class="product-info">
      <div class="w-8/12">
        <h4>Example Product</h4>
        <ul class="rating">
          <li v-for="rating in 5" :key="rating"><i class="fa fa-star"></i></li>
        </ul>
        <h5>$0.00 USD</h5>
      </div>
      <div class="w-4/12">
        <span class="status-tag">In Stock</span>
      </div>
    </div>
    <button class="button-default gradient-bg">
      Purchase Now
    </button>
  </div>
</template>
<style lang="scss" scoped>
.product-info {
  @apply flex items-center mb-4;
  h4 {
    @apply text-white text-sm font-bold uppercase;
  }
  h5 {
    @apply text-white text-sm;
  }
  .status-tag {
    @apply bg-green text-xs text-white font-bold uppercase px-2 py-1 rounded;
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
  name: 'Product'
}
</script>