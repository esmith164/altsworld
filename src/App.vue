<template>
  <div class="landing">
    <Header />
    <Features />
    <Shop />
    <Faq />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Features from "@/components/Features.vue";
import Shop from "@/components/Shop/index.vue";
import Faq from "@/components/Faq/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Features,
    Shop,
    Faq
  },
};
</script>