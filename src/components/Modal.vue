<template>
  <div class="modal-mask">
    <div class="modal" :style="{ width: `${props.width}px` }">
      <div class="modal-header flex mb-4">
        <slot name="header"></slot>
        <button class="text-white hover:text-primary duration-200 ml-auto" @click="closeModal">
          <i class="fas fa-times"/>
        </button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }
  .modal {
    margin: auto;
    @apply bg-[#0C1A24] p-9 rounded-lg;
  }
</style>
<script>
export default {
  props: {
    width: {
   //   type: Number
    }
  },
  setup(props, context) {
    function closeModal() {
      context.emit('onClose')
    }
    return {
      props,
      closeModal
    }
  }
}
</script>