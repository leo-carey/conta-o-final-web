<template>
  <client-only>
    <ElDialog
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
            <ElButton
              type="info"
              class="!bg-zinc-400 hover:!bg-zinc-500 !border-zinc-400 hover:!border-zinc-500 !text-slate-900 hover:!text-slate-800"
              @click="$emit('reloadSpoiler', selectedMovie)"
            >
              <ElIcon
                class="el-icon--left !text-slate-900 hover:!text-slate-800"
                ><RefreshRight
              /></ElIcon>
              {{ $t('spoiler_more_options') }}
            </ElButton>

            <ElButton
              type="success"
              class="!bg-cof-cyan-100 hover:!bg-cof-cyan-200 !border-cof-cyan-100 !text-slate-900"
              @click="hearSpoiler"
            >
              <ElIcon class="el-icon--left !text-slate-900"
                ><VideoPlay
              /></ElIcon>
              {{ $t('spoiler_hear_button') }}
            </ElButton>

            <ElButton
              type="primary"
              class="!bg-cof-primary-100 hover:!bg-cof-primary-200 !border-cof-primary-100 !text-slate-100"
              @click="close"
            >
              <ElIcon class="el-icon--left !text-slate-100"
                ><CircleCloseFilled
              /></ElIcon>
              {{ $t('spoiler_close_button') }}
            </ElButton>
          </div>
        </div>
      </template>

      <p class="text-slate-300 text-lg">{{ spoiler }}</p>
    </ElDialog>
  </client-only>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import {
  CircleCloseFilled,
  VideoPlay,
  RefreshRight
} from '@element-plus/icons-vue'

import { SpeechService } from '@/services'

// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['spoiler', 'showSpoiler', 'selectedMovie'])

const spoiler = ref(props.spoiler)
const showSpoiler = ref(props.showSpoiler)
const selectedMovie = ref(props.selectedMovie)

watch(
  () => props.showSpoiler,
  (newVisibility) => {
    showSpoiler.value = newVisibility
  }
)
watch(
  () => props.spoiler,
  (newSpoiler) => {
    spoiler.value = newSpoiler
  }
)
watch(
  () => props.selectedMovie,
  (newMovie) => {
    selectedMovie.value = newMovie
  }
)

const emit = defineEmits(['update:showSpoiler', 'reloadSpoiler'])

// Methods
const hearSpoiler = async () => {
  try {
    await SpeechService.talk(spoiler.value) //, this.locale
  } catch (error: any) {
    console.error('Houve algum erro: ', error)

    ElMessage({
      showClose: true,
      message: error,
      type: 'error'
    })
  }
}

const stopSpoiler = () => {
  SpeechService.stopTalk()
  emit('update:showSpoiler', !showSpoiler.value)
}
</script>

<style lang="css">
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

@media (max-width: 768px) {
  .dialog-spoiler {
    @apply w-[80%];
  }
}
</style>
