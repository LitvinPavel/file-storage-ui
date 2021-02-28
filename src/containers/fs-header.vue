<template>
  <header class="relative select-none bg-gray-50 z-50">
    <div
      class="flex items-center justify-between text-sm px-6 lg:px-10 py-5 sm:py-6"
    >
      <span
        class="flex lg:hidden"
        :class="{ 'text-grey': modelValue }"
        @click="$emit('update:modelValue', !modelValue)"
        >toggle sidebar {{ modelValue }}</span
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "fs-header",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],

};
</script>