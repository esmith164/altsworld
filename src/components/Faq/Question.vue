<template>
  <div class="question-component relative">
    <button class="question-toggle flex w-full text-white font-bold mb-3" @click="isOpen = !isOpen">
      {{ props.title }}
      <span class="ml-auto">
        <i class="fa fa-chevron-down"></i>
      </span>
    </button>
    <div class="gradient-bg h-[2px] rounded-full mb-3"></div>
    <div class="question-content text-white text-sm" v-if="isOpen">
      <h4 class="text-green text-lg font-bold mb-2">{{ props.subtitle }}</h4>
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
    const isOpen = ref(false);
    return {
      props,
      isOpen,
    };
  },
};
</script>