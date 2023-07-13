<template>
  <div class="header-component">
    <Navbar />
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-8 mt-24">
          <h1
            class="text-white text-4xl lg:text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            <span class="text-green"> Your #1 Source</span> for cheap and
            affordable accounts
          </h1>
          <p class="text-sm text-white leading-10 mb-8" data-aos="fade-down">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <a
            href="#"
            class="gradient-bg button-default duration-200 hover:opacity-70"
            data-aos="zoom-in"
          >
            Get Started
          </a>
          <div class="statistics">
            <div
              class="stat"
              v-for="(stat, idx) in stats"
              :key="idx"
              data-aos="fade"
            >
              <h2>{{ stat.value }}</h2>
              <h4>{{ stat.name }}</h4>
              <div class="w-10 h-1 bg-green rounded-full mx-auto lg:mx-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header-component {
    background: url("@/assets/img/header.png") center center no-repeat;
    background-size: cover;
    min-height: 1250px;
    @apply px-4;
    .statistics {
      @apply grid gap-y-12 lg:grid-cols-3  mt-12 lg:mt-40 mb-12 lg:mb-0;
      .stat {
        @apply flex flex-col text-center lg:text-left;
        h2 {
          @apply text-green text-4xl font-bold mb-2;
        }
        h4 {
          @apply text-white text-base mb-3 font-medium;
        }
      }
    }
  }
</style>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {
    const stats = [
      {
        name: "Accounts Sold",
        value: "2000+",
      },
      {
        name: "Total Sales",
        value: "300+",
      },
      {
        name: "Transactions",
        value: "1000+",
      },
    ];
    return {
      stats,
    };
  },
};
</script>