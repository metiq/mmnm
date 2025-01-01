<script setup lang="ts">

import type { IBuilding } from "@/types";

let buildings = await queryContent<IBuilding>('buildings').find();

</script>
<template>
  <div class="w-full">
    <header
      class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120"
      style="scrollbar-width: thin;">
      <div
        class="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <span class="font-mono text-slate-500">2024 ©ИКОМОС Македонија. Сите права се задржани.</span>
        <!-- <span class="mt-6 flex gap-6 font-bold text-slate-900">
        Национален комитет ИКОМОС Македонија
      </span> -->
      </div>
      <div
        class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
        <a href="/" class="relative mx-auto block">
          <img
            class="h-24 mx-auto rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl  shadow-xl shadow-slate-200"
            src="https://monitoring.icomos.org.mk/media/logos/MPKN-Horizontal_Logo-RGB-Inverse_Large-1000.png" alt="" />
        </a>
        <div class="mt-10 text-center lg:mt-12 lg:text-left">
          <p class="text-xl font-bold text-slate-900">
            Мониторинг на модернистичко наследство
          </p>
          <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
            Мониторингот на модернистичко наследство се фокусира на зачувување, следење и одржлива заштита на
            архитектонските и културните објекти од овој период.
          </p>
        </div>
        <section class="mt-12 hidden lg:block">
          <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            За проектот
          </h2>
          <p class="mt-2 text-base leading-7 text-slate-700">
            Овој проект се фокусира на зачувување, документирање и следење на состојбата на модернистичкото
            архитектонско
            и културно наследство. Преку анализа на неговото значење, историски контекст и современи предизвици, се
            обезбедуваат насоки за негово одржливо користење и заштита.
          </p>
        </section>
      </div>
    </header>
    <main class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
      <div
        class="mx-auto p-8 grid auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-3">
        <article v-for="b in buildings"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img :src="b.photo" alt="" class="absolute inset-0 -z-10 size-full object-cover">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
            <time datetime="2020-03-16" class="mr-8">{{ b.basicData.dateBuilt }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="flex gap-x-2.5">
                {{ b.basicData.architect }}
              </div>
            </div>
          </div>
          <h3 class="mt-3 text-lg/6 font-semibold text-white">
            <a href="#">
              <span class="absolute inset-0"></span>
              {{ b.basicData.name }}
            </a>
          </h3>
        </article>


      </div>
    </main>
    <footer class="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <section>
          <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <!-- <TinyWaveFormIcon colors={['fill-violet-300', 'fill-pink-300' ]} class="h-2.5 w-2.5" /> -->
            <span class="ml-2.5">About</span>
          </h2>
          <p class="mt-2 text-base leading-7 text-slate-700">
            In this show, Eric and Wes dig deep to get to the facts with guests who
            have been labeled villains by a society quick to judge, without actually
            getting the full story. Tune in every Thursday to get to the truth with
            another misunderstood outcast as they share the missing context in their
            tragic tale.
          </p>
        </section>
        <h2 class="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
          <!-- <PersonIcon class="h-3 w-auto fill-slate-300" /> -->
          <span class="ml-2.5">Hosted by</span>
        </h2>
        <div class="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
          ICOMOS MK
        </div>
      </div>
    </footer>
  </div>
</template>
