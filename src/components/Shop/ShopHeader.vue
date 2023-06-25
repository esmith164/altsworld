<template>
  <div class="shop-header-component">
    <div class="col-span-12 md:col-span-6 lg:col-span-9">
      <div class="input-wrapper">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search by product title" />
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <button class="dropdown-toggle">
        All Accounts
        <div class="icon-wrapper">
          <i class="fa fa-chevron-down"></i>
        </div>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .shop-header-component {
    @apply grid grid-cols-12 gap-8;
    .input-wrapper {
      @apply bg-deep flex gap-x-4 items-center px-6 rounded-lg text-green;
      input {
        @apply w-full bg-deep border-none outline-none focus:outline-none text-xs text-white h-12;
      }
    }
    .dropdown-toggle {
      @apply flex border h-12 border-green text-green text-sm items-center w-full rounded-xl pl-4 font-bold;
      .icon-wrapper {
        @apply bg-green text-white w-12 h-12 flex items-center justify-center ml-auto rounded-xl;
      }
    }
  }
</style>
<script>
// todo: connect the header to store...
</script>