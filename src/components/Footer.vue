<template>
  <div class="footer-component">
    <div class="h-[1px] mb-12 gradient-bg opacity-20"></div>
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-y-12">
        <div class="col-span-12 lg:col-span-4">
          <div class="w-[80px] h-[80px] bg-white rounded-xl opacity-10 mb-4"></div>
          <h3 class="text-xl font-bold mb-1"><span class="text-green">Alts</span><span class="text-white">World</span></h3>
          <p class="text-white opacity-50 text-sm">Copyright AltsWorld 2023</p>
        </div>
        <div class="col-span-12 lg:col-span-2">
          <h4 class="font-bold">Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div class="col-span-12 lg:col-span-2">
          <h4 class="font-bold">Legal</h4>
          <ul>
            <li><a href="#">Terms Of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-span-12 lg:col-span-2">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#"><i class="fa fa-telegram"></i> Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-component {
  @apply py-20;
  h4 {
    @apply text-white text-lg font-bold mb-2;
  }
  ul {
    @apply flex flex-col gap-y-2;
    li {
      a {
        @apply text-white opacity-60 text-sm flex items-center gap-x-2 hover:text-green hover:opacity-100 duration-200;
      }
    }
  }
}
</style>