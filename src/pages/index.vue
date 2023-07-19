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
          <adsbygoogle
            ad-slot="9738307227"
            :ad-style="{
              display: 'block',
              width: '200px',
              height: '400px',
              background: '#ccc'
            }"
          />
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
              <p class="mb-3 ml-1 font-normal text-left text-sm md:text-base">
                {{ $t('form_label') }}
              </p>

              <el-form @submit="searchMovies" @submit.prevent>
                <div class="w-full flex items-center justify-between">
                  <el-input
                    v-model="searchText"
                    :placeholder="`Ex: ${$t('form_placeholder')}`"
                    style="
                      --el-input-focus-border-color: #cc6c4a;
                      --el-input-border-radius: 6px;
                    "
                  />

                  <el-button
                    :icon="Search"
                    :type="
                      $colorMode.preference === 'light' ? 'success' : 'primary'
                    "
                    circle
                    size="large"
                    class="ml-4"
                    @click="searchMovies"
                  />
                </div>
              </el-form>
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
          <adsbygoogle
            ad-slot="5753726539"
            :ad-style="{
              display: 'inline-block',
              width: '200px',
              height: '400px',
              background: '#ccc'
            }"
          />
        </aside>
      </div>
    </div>

    <el-backtop
      :right="100"
      :bottom="100"
      class="!bg-[#cc6c4a] hover:!bg-[#b35f40] !text-white"
    />

    <client-only>
      <el-dialog
        v-model="showSpoiler"
        :show-close="false"
        class="dialog-spoiler"
        append-to-body
        @closed="stopSpoiler"
      >
        <template #header="{ close, titleId }">
          <div class="header-spoiler">
            <h4
              :id="titleId"
              class="text-xl text-slate-300 uppercase font-semibold"
            >
              {{ $t('spoiler_title') }}
            </h4>

            <div>
              <el-button
                type="info"
                style="color: #1e293b"
                @click="reloadSpoiler(selectedMovie)"
              >
                <el-icon class="el-icon--left" style="color: #1e293b"
                  ><RefreshRight
                /></el-icon>
                {{ $t('spoiler_more_options') }}
              </el-button>

              <el-button
                type="success"
                style="color: #1e293b"
                @click="hearSpoiler"
              >
                <el-icon class="el-icon--left" style="color: #1e293b"
                  ><VideoPlay
                /></el-icon>
                {{ $t('spoiler_hear_button') }}
              </el-button>

              <el-button type="primary" style="color: #cbd5e1" @click="close">
                <el-icon class="el-icon--left" style="color: #cbd5e1"
                  ><CircleCloseFilled
                /></el-icon>
                {{ $t('spoiler_close_button') }}
              </el-button>
            </div>
          </div>
        </template>

        <p class="text-slate-300 text-lg">{{ spoiler }}</p>
      </el-dialog>
    </client-only>
  </section>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import {
  Search,
  CircleCloseFilled,
  VideoPlay,
  RefreshRight
} from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

import { ItemResponseWhatsMovie } from '@/interfaces/ResponseWhatsMovie'
import CardsMoviesComponents from '@/components/base/CardsMoviesComponents.vue'

import { ApiService, SpeechService } from '@/services'

export default {
  components: {
    CardsMoviesComponents,
    CircleCloseFilled,
    VideoPlay,
    RefreshRight
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
      Search,
      apiUrl,
      locale,
      selectedMovie
    }
  },
  data() {
    return {
      searchText: '',
      moviesResult: {
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
    async searchMovies() {
      this.loading = true
      this.loadCards = true

      if (this.searchText === '') return

      try {
        const { data } = await ApiService.searchMovie(
          this.apiUrl,
          this.locale,
          this.searchText
        )

        this.moviesResult = {
          currentPage: data.currentPage,
          items: data.items,
          pages: data.pages,
          totalResults: data.totalResults
        }
      } catch (err: any) {
        console.error('Ocorreu um erro com a requisição da Api: ', err)
      }

      this.loading = false
      this.loadCards = false
    },

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
    },

    async reloadSpoiler(movie: ItemResponseWhatsMovie) {
      this.spoiler = ''
      await this.selectMovieAndGetSpoiler(movie)
    },

    async hearSpoiler() {
      try {
        await SpeechService.talk(this.spoiler) //, this.locale
      } catch (error: any) {
        console.error('Houve algum erro: ', error)

        ElMessage({
          showClose: true,
          message: error,
          type: 'error'
        })
      }
    },

    stopSpoiler() {
      SpeechService.stopTalk()
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

:root {
  --el-color-primary: #cc6c4a;
  --el-button-hover-border-color: #ad5c3f;
  --el-button-hover-bg-color: #ad5c3f;
  --el-color-primary-light-5: #ad5c3f;
  --el-color-primary-light-3: #ad5c3f;
  --el-color-primary-light-3: #ad5c3f;
  --el-color-primary-dark-2: #ad5c3f;

  --el-color-success: #73bda8;
  --el-color-success-light-5: #61a08e;
  --el-color-success-light-5: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-light-3: #61a08e;
  --el-color-success-dark-2: #61a08e;
}

/**
 * DIALOG
 */
.dialog-spoiler {
  @apply bg-slate-800 text-white;
}

.dialog-spoiler .el-dialog__body {
  @apply pt-3;
}

.el-overlay {
  backdrop-filter: saturate(180%) blur(20px);
}

.header-spoiler {
  @apply flex items-center justify-between flex-row pb-4 border-b-[1px] border-b-[#cbd5e16c];
}

/**
 * MOBILE
 */
@media (max-width: 768px) {
  .home-start.content-loaded {
    padding-top: 140px;
  }

  .dialog-spoiler {
    @apply w-[80%];
  }
}
</style>
