<template>
  <div>
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
          :type="$colorMode.preference === 'light' ? 'success' : 'primary'"
          circle
          size="large"
          class="ml-4"
          @click="searchMovies"
        />
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Search } from '@element-plus/icons-vue'

import { ResponseWhatsMovie } from '@/interfaces/ResponseWhatsMovie'
import { ApiService } from '@/services'

const { locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.API_BASE_URL as string

const searchText = ref('')

defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  loadCards: {
    type: Boolean,
    default: true
  },
  moviesResult: {
    type: Object as PropType<ResponseWhatsMovie>,
    default: {
      success: true,
      currentPage: 1,
      items: [],
      pages: 0,
      totalResults: 0
    } as ResponseWhatsMovie
  }
})

const emit = defineEmits([
  'update:loading',
  'update:loadCards',
  'update:moviesResult'
])

const searchMovies = async () => {
  if (searchText.value.length <= 3) return

  emit('update:loading', true)
  emit('update:loadCards', true)

  try {
    const { data } = await ApiService.searchMovie(
      apiUrl,
      locale.value,
      searchText.value
    )

    emit('update:moviesResult', {
      currentPage: data.currentPage,
      items: data.items,
      pages: data.pages,
      totalResults: data.totalResults
    })
  } catch (err: any) {
    console.error('Ocorreu um erro com a requisição da Api: ', err)
  }

  emit('update:loading', false)
  emit('update:loadCards', false)
}
</script>
