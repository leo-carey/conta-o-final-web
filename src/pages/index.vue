<template>
  <section class="home-page pb-16 mt-10">
    <div class="w-[1024px] mx-auto mb-12">
      <div class="flex items-center justify-center mr-10 mb-14">
        <img
          class="w-[400px]"
          src="~/public/img/conta-o-final-logo.png"
          alt="pt-BR"
        />
      </div>

      <div class="w-[580px] mx-auto">
        <p class="mb-3 ml-1 font-normal text-left">
          Qual o nome do filme que você quer saber o final?
        </p>

        <div class="w-full flex items-center justify-between">
          <el-input
            v-model="searchText"
            placeholder="Ex: capitão américa soldado invernal"
            style="
              --el-input-focus-border-color: #cc6c4a;
              --el-input-border-radius: 6px;
            "
          />

          <el-button
            :icon="Search"
            type="danger"
            circle
            size="large"
            class="ml-4 !bg-[#7ac7b1] hover:!bg-[#83d3bc] !border-[#7ac7b1] dark:!bg-[#cc6c4a] dark:hover:!bg-[#b35f40] dark:!border-[#db744f]"
            @click="searchMovies"
          />
        </div>
      </div>
    </div>

    <div class="w-[1024px] mx-auto mt-5">
      <el-alert
        v-if="errorAlert"
        title="diga o nome do filme, irmão"
        type="error"
      />

      <CardsMoviesComponents :movies="moviesResult.items" />
    </div>

    <el-backtop
      :right="100"
      :bottom="100"
      class="!bg-[#cc6c4a] hover:!bg-[#b35f40] !text-white"
    />
  </section>
</template>

<script lang="ts">
import { Search } from '@element-plus/icons-vue'

import CardsMoviesComponents from '@/components/base/CardsMoviesComponents.vue'
import ApiService from '@/services/api'

export default {
  components: {
    CardsMoviesComponents
  },
  setup() {
    const runtimeConfig = useRuntimeConfig()
    const apiUrl = runtimeConfig.public.API_BASE_URL as string

    return {
      Search,
      apiUrl
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
      errorAlert: false
    }
  },
  methods: {
    async searchMovies() {
      if (this.searchText === '') return

      try {
        const { data } = await ApiService.searchMovie(
          this.apiUrl,
          'pt-BR',
          this.searchText
        )

        this.moviesResult = {
          currentPage: data.currentPage,
          items: data.items,
          pages: data.pages,
          totalResults: data.totalResults
        }

        console.log('RESPONSE =============> ', data)
      } catch (err: any) {
        console.error('Ocorreu um erro com a requisição da Api: ', err)
      }
    }
  }
}
</script>

<style lang="css">
.home-page {
}
</style>
