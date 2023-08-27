<template>
  <div class="relative flex flex-col max-w-sm bg-black rounded-md">
    <ClientOnly>
      <div
        class="w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center"
        v-if="token"
      >
        <ConfettiExplosion
          :stageWidth="400"
          shouldDestroyAfterDone
        />
        <div class="backdrop-blur-sm h-full w-full bg-gray-950 bg-opacity-80 flex flex-col justify-center items-center rounded-md">
          <div class="pb-6 text-base text-gray-200 md:text-lg">
            Success!!!
          </div>
  
          <UiButton @click="reset">
            Try demo one more time
          </UiButton>
        </div>

      </div>
      
      <div class="mx-[6px] my-1">
        {{ description }}
      </div>

      <div class="m-1">
        <FootballCaptcha
          :key="key"
          :api="api"
          class="w-full aspect-square rounded-b-sm"
          v-model:token="token"
          v-model:description="description"
        />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import ConfettiExplosion from "vue-confetti-explosion";

  const description = ref('')
  const token = ref('')
  const key = ref(Math.random())
  const reset = () => key.value = Math.random()

  defineProps({
    api: {
      type: String,
      required: true,
    }
  })
</script>
