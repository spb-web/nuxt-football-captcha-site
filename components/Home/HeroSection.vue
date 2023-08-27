<template>
  <div class="pt-12 overflow-hidden sm:pb-20 md:pt-28">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center justify-center gap-y-8">
      <h1 class="px-1 text-5xl font-medium text-center md:text-7xl">
        <span class="leading-5">
          Nuxt Move Captcha
          <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-400">
            для разработчиков и команд Nuxt
          </span>
        </span>
      </h1>

      <UiButton
        tag="a"
        target="_blank"
        href="https://github.com/spb-web/nuxt-football-captcha"
      >
        <template #icon>
          <RiGithubFill/>
        </template>
        GitHub
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import RiGithubFill from '~icons/ri/github-fill'
</script>