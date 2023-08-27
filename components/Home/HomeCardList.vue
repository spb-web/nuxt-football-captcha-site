<template>
  <ul class="home-card-list">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
  const rafThrottle = <A extends unknown[]>(callback: (...args: A) => unknown) => {
    let requestId: null | number = null

    let lastArgs: A

    const later = () => {
      requestId = null
      callback(...lastArgs)
    }

    const throttled = function(...args: A) {
      lastArgs = args
      if (requestId === null) {
        requestId = requestAnimationFrame(() => later())
      }
    }

    return throttled
  }

  const mousePosition = reactive({x: 0, y: 0})
  const updateMousePosition = rafThrottle((event: MouseEvent) => {
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
  })

  useEventListener('mousemove', updateMousePosition)
  provide('HomeCardListMousePosition', mousePosition)
</script>

<style scoped>

</style>