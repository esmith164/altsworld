<template>
  <div class="features-component">
    <div class="container mx-auto">
      <h1 class="text-white text-center text-4xl font-bold mb-4">
        Why choose <span class="text-green">AltWorld?</span>
      </h1>
      <p class="text-white w-7/12 mx-auto text-center text-sm leading-9 mb-12">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>
      <div class="grid lg:grid-cols-3 gap-12">
        <div
          v-for="(feature, idx) in features"
          :key="idx"
          class="feature"
          data-aos="fade-down"
        >
          <div class="icon-wrapper gradient-bg" data-aos="zoom-in">
            <i :class="feature.icon"></i>
          </div>
          <h4 data-aos="fade-down">{{ feature.name }}</h4>
          <p data-aos="fade-down">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .features-component {
    .feature {
      @apply bg-[#152633] p-7 rounded-2xl;
      .icon-wrapper {
        @apply w-12 h-12 text-white text-xl flex items-center justify-center rounded-xl;
      }
      h4 {
        @apply text-green text-lg font-bold mt-4 mb-2;
      }
      p {
        @apply text-white text-sm leading-8;
      }
    }
  }
</style>
<script>
export default {
  setup() {
    const features = [
      {
        name: "Leave a feedback!",
        icon: "fa fa-star",
        description: `You can leave feedback by following instructions below:

Purchase any product from our shop.

Wait till your product delivers to your inbox

Click on the email in your inbox and you should see a link, click the link and you should see the option that says: "Rate this order."
Please do this to all orders you make on our shop, it helps us out a lot!`,
      },
      {
        name: "Customer Support",
        icon: "fa fa-lock",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. There are but the majority have suffererd.",
      },
      {
        name: "Reward Program",
        icon: "fa fa-gift",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. There are but the majority have suffererd.",
      },
    ];
    return {
      features,
    };
  },
};
</script>