<template>
  <div class="faq-component">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-x-8">
        <div class="col-span-4">
          <!-- Title area -->
          <h2 class="text-4xl text-white font-bold uppercase mb-4">Faq</h2>
          <p class="text-white leading-10 text-sm mb-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffererd.
          </p>
          <a href="#" class="button-default bg-blue">
            <span class="mr-3"><i class="fa fa-telegram"></i></span>Telegram
          </a>
        </div>
        <!-- FAQ -->
        <div class="col-span-8 flex flex-col gap-y-4">
          <Question
            v-for="question in questions"
            :key="question.title"
            :title="question.title"
            :subtitle="question.subtitle"
            :content="question.content"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Question from "./Question.vue";
export default {
  components: {
    Question,
  },
  setup() {
    const questions = [
      {
        title: "What is Lorem Ipsum?",
        subtitle: "Yes,  typically 24/48 hours..",
        content:
          "Praesent rutrum libero sed enim tempor egestas. Nam id felis ultrices, rhoncus nibh convallis, ornare nisi. Donec consectetur ut purus vulputate vestibulum. Proin lorem justo, ullamcorper et laoreet sit amet, varius quis massa. Suspendisse at est ut urna viverra efficitur et non risus.",
      },
      {
        title: "What is Lorem Ipsum?",
        subtitle: "Yes,  typically 24/48 hours..",
        content:
          "Praesent rutrum libero sed enim tempor egestas. Nam id felis ultrices, rhoncus nibh convallis, ornare nisi. Donec consectetur ut purus vulputate vestibulum. Proin lorem justo, ullamcorper et laoreet sit amet, varius quis massa. Suspendisse at est ut urna viverra efficitur et non risus.",
      },
      {
        title: "What is Lorem Ipsum?",
        subtitle: "Yes,  typically 24/48 hours..",
        content:
          "Praesent rutrum libero sed enim tempor egestas. Nam id felis ultrices, rhoncus nibh convallis, ornare nisi. Donec consectetur ut purus vulputate vestibulum. Proin lorem justo, ullamcorper et laoreet sit amet, varius quis massa. Suspendisse at est ut urna viverra efficitur et non risus.",
      },
      {
        title: "What is Lorem Ipsum?",
        subtitle: "Yes,  typically 24/48 hours..",
        content:
          "Praesent rutrum libero sed enim tempor egestas. Nam id felis ultrices, rhoncus nibh convallis, ornare nisi. Donec consectetur ut purus vulputate vestibulum. Proin lorem justo, ullamcorper et laoreet sit amet, varius quis massa. Suspendisse at est ut urna viverra efficitur et non risus.",
      },
    ];
    return {
      questions,
    };
  },
};
</script>