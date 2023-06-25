<template>
  <div class="landing">
    <Header />
    <Features />
    <Shop />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Features from "@/components/Features.vue";
import Shop from "@/components/Shop/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Features,
    Shop,
  },
};
</script>