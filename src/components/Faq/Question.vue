<template>
  <div class="question-component">
    <button class="question-toggle flex w-full text-white font-bold mb-3">
      {{ props.title }}
      <span class="ml-auto">
        <i class="fa fa-chevron-down"></i>
      </span>
    </button>
    <div class="gradient-bg h-1 rounded-full mb-3"></div>
    <div class="question-content text-white text-sm">
      <h4 class="text-green text-lg font-bold">{{ props.subtitle }}</h4>
      <p class="leading-8">{{ props.content }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>