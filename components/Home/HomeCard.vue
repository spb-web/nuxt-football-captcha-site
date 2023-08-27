<template>
  <li
    ref="root"
    :style="styleList"
    class="card relative rounded-2xl sm:h-[500px] col-span-1 flex flex-col justify-between lg:px-8 lg:pt-8 border-black/30"
  >
    <span class="card-background"></span>
    <div>
      <h2 class="pt-8 px-8 lg:pt-0 lg:px-0 pb-2 text-2xl font-medium text-white">{{ title }}</h2>
      <div class="px-8 pt-2 lg:pt-0 lg:px-0 text-base text-gray-400 md:text-lg">
        {{ description }}
      </div>
    </div>
    <div class="flex justify-center">
      <slot name="view"></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
  const mousePosition = inject<{x: number, y: number}>('HomeCardListMousePosition')
  const root = ref<HTMLElement>()

  const styleList = computed(() => {
    if (!mousePosition) {
      return {}
    }

    const {top, left} = root.value ? root.value.getBoundingClientRect() : {top: 0, left: 0}

    return {
      '--home-card-x': `${mousePosition.x - left}px`,
      '--home-card-y': `${mousePosition.y - top}px`,
    }
  })

  defineProps({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  })
</script>

<style scoped>
.card {
  border: 0
}

.card-background {
  background: #202023;
  border-radius: 11px;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: background .45s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 100%;
  z-index: -1
}

.card:hover .card-background {
  background: #27272a
}

.card:before {
  border-radius: 12px;
  bottom: -1px;
  contain: size;
  content: "";
  height: calc(100% + 2px);
  left: -1px;
  pointer-events: none;
  position: absolute;
  right: -1px;
  top: -1px;
  transition: background .2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: calc(100% + 2px);
  will-change: background;
  z-index: -2
}

@media screen and (min-width: 800px) {
  .card:before {
    background:radial-gradient(300px circle at var(--home-card-x) var(--home-card-y),#1cd1c6 0,#407cff 50%,transparent 100%)
  }
}
</style>