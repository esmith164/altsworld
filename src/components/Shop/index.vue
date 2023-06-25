<template>
  <div class="shop-component">
    <div class="container mx-auto">
      <h1 class="text-white text-center text-4xl font-bold mb-12">
        Shop All <span class="text-green">Accounts</span>
      </h1>
      <!-- Header -->
      <ShopHeader class="mb-12" />
      <!--  Products -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Product v-for="x in 8" :key="x"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-component {
    @apply pt-24 pb-20;
  }
</style>
<script>
import ShopHeader from '@/components/Shop/ShopHeader.vue'
import Product from '@/components/Shop/Product.vue'
export default {
  name: 'Shop',
  components: {
    Product,
    ShopHeader
  }
}
</script>