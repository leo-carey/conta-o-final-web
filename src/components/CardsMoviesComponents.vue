<template>
  <div class="w-full mt-5 pb-10">
    <div
      v-if="movies.length !== 0"
      class="text-sm font-semibold tracking-wide uppercase text-center mb-10"
    >
      <h2>{{ $t('cards_title') }}</h2>
    </div>

    <el-skeleton style="width: 100%" :loading="loading" animated>
      <template #template>
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="(_items, itemIndex) in 4" :key="itemIndex">
            <el-skeleton-item
              variant="image"
              style="width: 230px; height: 250px"
            />

            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />

              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                  margin-top: 16px;
                  height: 16px;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #default>
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="(movie, movieKey) in movies"
            :key="movieKey"
            class="group relative cursor-pointer"
            @click="$emit('selectMovieAndGetSpoiler', movie)"
          >
            <div
              class="group-hover:opacity-100 arrow-this block absolute -top-4 -left-4 opacity-0 transition-opacity delay-100 ease-linear z-[90]"
            >
              <img
                src="~/public/img/seta95.png"
                class="w-[60px] transition-all delay-100 ease-linear"
              />
            </div>

            <el-card
              :body-style="{
                padding: '0px',
                borderColor: '#000000da'
              }"
            >
              <div
                class="p-0 pt-2 w-full absolute top-0 left-0 bg-[#00000093] rounded-t-[4px]"
              >
                <span
                  class="block text-xs text-slate-200 text-center font-medium mb-2"
                  >{{ movie.title }}</span
                >
              </div>

              <div
                class="group-hover:after:opacity-40 after:content-'' after:w-full after:h-full after:top-0 after:left-0 after:block after:absolute after:opacity-0 after:bg-black after:transition-opacity after:delay-100 after:ease-linear after:z-[80]"
              >
                <img :src="movie.poster" class="w-full block" />
              </div>
            </el-card>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ItemResponseWhatsMovie } from '@/interfaces/ResponseWhatsMovie'

defineProps({
  movies: {
    type: Array<ItemResponseWhatsMovie>,
    default: []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['selectMovieAndGetSpoiler'])
</script>
