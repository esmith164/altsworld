<template>
  <div class="navbar-component">
    <div class="container mx-auto flex">
      <div class="w-16 h-16 gradient-bg rounded-2xl opacity-40 mr-8"></div>
      <ul class="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
      <div class="button-group">
        <a href="#" class="bg-blue button-default"> Login </a>
        <a
          href="#"
          class="bg-blue h-12 w-12 text-white text-sm flex items-center justify-center rounded-xl"
        >
          <i class="fa fa-telegram"></i>
        </a>
        <a
          href="#"
          class="bg-green h-12 w-12 text-white text-sm flex items-center justify-center rounded-xl"
        >
          <i class="fa fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .navbar-component {
    @apply py-12;
    .navbar-nav {
      @apply hidden lg:flex gap-x-8 items-center;
      li {
        a {
          @apply text-white text-sm uppercase opacity-70 hover:opacity-100 duration-200;
        }
      }
    }
    .button-group {
      @apply flex ml-auto gap-x-3 items-center;
    }
  }
</style>