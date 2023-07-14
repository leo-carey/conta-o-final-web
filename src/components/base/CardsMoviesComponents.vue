<template>
  <div v-if="movies.length !== 0" class="mt-5">
    <div
      class="text-sm font-semibold tracking-wide uppercase text-center mb-10"
    >
      <h2>Selecione o filme que você está procurando:</h2>
    </div>

    <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
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
      </template>

      <template #default>
        <div class="grid grid-cols-4 gap-6">
          <div
            v-for="(movie, movieKey) in movies"
            :key="movieKey"
            class="card-wrapper relative cursor-pointer"
          >
            <div
              class="arrow-this block absolute -top-4 -left-4 opacity-0 transition-opacity delay-100 ease-linear z-[90]"
            >
              <img
                src="~/public/img/seta95.png"
                class="w-[60px] transition-all delay-100 ease-linear"
              />
            </div>

            <el-card :body-style="{ padding: '0px', overflow: 'hidden' }">
              <div class="image-banner">
                <img :src="movie.poster" class="w-full block" />
              </div>

              <div class="p-3 pb-2">
                <span class="block text-sm font-medium mb-2">{{
                  movie.title
                }}</span>
              </div>
            </el-card>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts">
import { ItemResponseWhatsMovie } from 'interfaces/ResponseWhatsMovie'

export default {
  props: {
    movies: {
      type: Array<ItemResponseWhatsMovie>,
      default: []
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.card-wrapper:hover .arrow-this {
  @apply opacity-100;
}

.image-banner:after {
  content: '';
  @apply w-full h-full top-0 left-0 block absolute opacity-0 bg-black transition-opacity delay-100 ease-linear z-[80];
}

.card-wrapper:hover .image-banner:after {
  @apply opacity-40;
}
</style>
