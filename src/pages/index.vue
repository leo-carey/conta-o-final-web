<template>
  <section
    v-loading.fullscreen.lock="loading"
    class="home-page"
    element-loading-background="rgba(0, 0, 0, 0.7)"
  >
    <div
      :class="`${
        moviesResult.items.length !== 0 ? 'content-loaded' : ''
      } home-start w-full`"
    >
      <div class="w-full flex items-center justify-between">
        <aside class="hidden lg:w-1/4 lg:flex items-start justify-start">
          <!-- <adsbygoogle
            ad-slot="9738307227"
            :ad-style="{
              display: 'block',
              width: '200px',
              height: '400px',
              background: '#ccc'
            }"
          /> -->
        </aside>

        <section
          :class="`w-full lg:w-2/4 px-10 lg:px-0 flex items-center ${
            moviesResult.items.length === 0 ? 'h-screen' : ''
          }`"
        >
          <div class="w-full flex-1">
            <div class="flex items-center justify-center mr-10 mb-14">
              <img
                class="w-[300px] lg:w-[400px]"
                src="~/public/img/conta-o-final-logo.png"
                alt="pt-BR"
              />
            </div>

            <div class="w-full lg:w-[580px] mx-auto">
              <SearchMovieForm
                v-model:loading="loading"
                v-model:load-cards="loadCards"
                v-model:movies-result="moviesResult"
              />
            </div>

            <div
              :class="`${
                moviesResult.items.length !== 0 ? 'content-loaded' : ''
              } content-cards w-full mt-10`"
            >
              <el-alert
                v-if="errorAlert"
                title="diga o nome do filme, irmão"
                type="error"
              />

              <CardsMoviesComponents
                v-model:movies="moviesResult.items"
                v-model:loading="loadCards"
                @select-movie-and-get-spoiler="selectMovieAndGetSpoiler"
              />
            </div>
          </div>
        </section>

        <aside class="hidden lg:w-1/4 lg:flex items-start justify-end">
          <!-- <adsbygoogle
            ad-slot="5753726539"
            :ad-style="{
              display: 'inline-block',
              width: '200px',
              height: '400px',
              background: '#ccc'
            }"
          /> -->
        </aside>
      </div>
    </div>

    <el-backtop
      :right="100"
      :bottom="100"
      class="!bg-[#cc6c4a] hover:!bg-[#b35f40] !text-white"
    />

    <ModalSpoiler
      v-model:show-spoiler="showSpoiler"
      :spoiler="spoiler"
      :selected-movie="selectedMovie"
      @reload-spoiler="selectMovieAndGetSpoiler"
    />
  </section>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

import { ItemResponseWhatsMovie } from '@/interfaces/ResponseWhatsMovie'
import CardsMoviesComponents from '@/components/CardsMoviesComponents.vue'

import { ApiService } from '@/services'

export default {
  components: {
    CardsMoviesComponents
  },
  setup() {
    const { locale } = useI18n()
    const runtimeConfig = useRuntimeConfig()
    const apiUrl = runtimeConfig.public.API_BASE_URL as string

    const selectedMovie: ItemResponseWhatsMovie = {
      id: 0,
      title: '',
      description: '',
      poster: '',
      poster2: ''
    }

    return {
      apiUrl,
      locale,
      selectedMovie
    }
  },
  data() {
    return {
      moviesResult: {
        success: true,
        currentPage: 1,
        items: [],
        pages: 0,
        totalResults: 0
      },
      errorAlert: false,
      loading: true,
      loadCards: false,
      spoiler: '',
      showSpoiler: false
    }
  },
  mounted() {
    this.loading = false
    window.speechSynthesis.getVoices()
  },
  methods: {
    async selectMovieAndGetSpoiler(movie: ItemResponseWhatsMovie) {
      this.loading = true
      this.selectedMovie = movie

      try {
        const { data } = await ApiService.getSpoiler(
          this.apiUrl,
          this.locale,
          movie
        )

        this.spoiler = data.spoilerText

        this.moviesResult = {
          success: true,
          currentPage: 1,
          items: [],
          pages: 0,
          totalResults: 0
        }

        this.showSpoiler = true
      } catch (err: any) {
        console.error('Ocorreu um erro com a requisição da Api: ', err)
      }

      this.loading = false
    }
  }
}
</script>

<style lang="css">
.home-start {
  transition: min-height 0.4s ease;
}

.home-start.content-loaded {
  min-height: 380px;
  padding-top: 100px;
  padding-bottom: 10rem;
}

.content-cards {
  height: 0;
  transition: height 0.6s ease;
}

.content-cards.content-loaded {
  height: auto;
  overflow: unset;
}

/**
 * MOBILE
 */
@media (max-width: 768px) {
  .home-start.content-loaded {
    padding-top: 140px;
  }
}
</style>
