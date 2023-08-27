<template>
  <div>
    <HomeHeroSection/>

    <section class="section-cards relative transition duration-700 py-[88px] opacity-100 translate-y-0">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center w-full flex-col">
        <HomeCardList class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-[40px] lg:gap-y-[60px] lg:gap-x-[44px]">
          <li class="cool-gradient relative rounded-2xl overflow-hidden w-full md:col-span-2 lg:col-span-3 flex flex-col lg:flex-row lg:justify-center pt-8 lg:pt-0 px-8 lg:pl-[65px] border-none">
            <div class="flex flex-col justify-center">
              <h2 class="pb-2 text-2xl font-medium text-white">Try nuxt-move-captcha online</h2>
              <div class="pr-6 lg:pr-0 mb-0 u-text-gray-600 text-base text-gray-400 md:text-lg">Write at a faster pace with our <span class="leading-relaxed text-white font-medium">supercharged Monaco editor</span>. <br><br> Use the <code>/</code> command for Vue components and Markdown shortcuts autocompletion.</div>
            </div>

            <div class="mt-16 flex justify-center">
              <DemoCaptcha 
                class="max-w-xs"
                api="/api/footballCaptcha/"
              />
            </div>
          </li>

          <!-- <li class="relative rounded-2xl h-[470px] w-full lg:col-span-2 flex flex-col justify-between px-8 pt-8 border-black/30 card">
            <span class="card-background" data-v-0d78d0dc=""></span>
            <div data-v-0d78d0dc=""><h2 class="pb-2 text-2xl font-medium text-white" data-v-0d78d0dc="">Content File System</h2><div class="lg:w-2/3 mb-6 pr-6 lg:pr-0 text-base text-gray-400 md:text-lg" data-v-0d78d0dc="">Work on your content files like in development and spot changes before commiting. Feels like home.</div></div>
            <div class="flex justify-end items-end w-full h-full" data-v-0d78d0dc="">
              <div class="relative h-full w-full max-w-[736px] max-h-[310px] bg-black rounded-t-lg bottom-0 right-0 flex overflow-hidden z-[1]">
                <DemoCaptcha 
                  class="w-full max-w-xs"
                  api="/api/footballCaptcha-0/"
                />
              </div>
            </div>
          </li> -->

          <HomeCard
            title="Tailor-made Themes"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-0/"
              />
            </template>
          </HomeCard>

          <HomeCard
            title="Tailor-made Themes"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-1/"
              />
            </template>
          </HomeCard>

          <HomeCard
            title="Example"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-2/"
              />
            </template>
          </HomeCard>

          <!-- <li class="relative rounded-2xl h-[470px] w-full lg:col-span-2 flex flex-col justify-between px-8 pt-8 border-black/30 card">
            <span class="card-background" data-v-0d78d0dc=""></span>
            <div data-v-0d78d0dc=""><h2 class="pb-2 text-2xl font-medium text-white" data-v-0d78d0dc="">Content File System</h2><div class="lg:w-2/3 mb-6 pr-6 lg:pr-0 text-base text-gray-400 md:text-lg" data-v-0d78d0dc="">Work on your content files like in development and spot changes before commiting. Feels like home.</div></div>
            <div class="flex justify-end items-end w-full h-full" data-v-0d78d0dc="">
              <div class="h-full w-full max-w-[736px] max-h-[310px] bg-black rounded-t-lg absolute bottom-0 right-0 flex overflow-hidden z-[1]">
                <DemoCaptcha 
                  class="w-full max-w-xs"
                  api="/api/footballCaptcha-3/"
                />
              </div>
            </div>
          </li> -->

    
          <HomeCard
            title="Example"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-3/"
              />
            </template>
          </HomeCard>

              
          <HomeCard
            title="Example"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-4/"
              />
            </template>
          </HomeCard>

          <HomeCard
            title="Example"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-5/"
              />
            </template>
          </HomeCard>

          <HomeCard
            title="Example"
            description=""
          >
            <template #view>
              <DemoCaptcha 
                class="w-full max-w-xs"
                api="/api/footballCaptcha-6/"
              />
            </template>
          </HomeCard>
        </HomeCardList>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const token = ref<string>()

watch(token, (tokenValue) => {
  if (tokenValue) {
    alert(`каптча решена!!! Сгенерирован токен ${tokenValue}. Генерация токена реализована в server/api/footballCaptcha.ts и может быть изменена`)
  }
})


useHead({
  bodyAttrs: {
    class: 'antialiased font-sans text-gray-800 dark:text-gray-100 font-normal bg-white dark:bg-gray-900 text-sm',
  },
});
</script>

<style>
.cool-gradient {
  background-image: radial-gradient(141.42% 141.42% at 0% 100%, rgba(62, 134, 172, 0.20) 0%, rgba(196, 215, 233, 0.20) 100%), radial-gradient(141.42% 141.42% at 0% 0%, #1D2F44 0%, #3E86AC 100%);
}

.section-cards {
  background-image: url('/bg-home-0.jpg');
  background-size: cover;
}
</style>
