<template>
  <component
    :is="tag"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-lg text-sm gap-x-2.5 px-3.5 py-2.5 relative text-white gradient-border-2 border-gradient-br-teal-gray-900 hover:border-gradient-br-teal-gray-950 before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-teal-500 before:via-indigoblue-400 before:to-indigoblue-600 before:blur-md before:z-[-1] inline-flex items-center"
  >
    <slot name="icon"></slot>
    <span class="">
      <slot></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: 'button',
  }
})
</script>
