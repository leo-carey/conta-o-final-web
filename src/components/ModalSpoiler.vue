<template>
  <client-only>
    <ElDialog
      v-model="dialogVisible"
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
              style="color: #1e293b"
              @click="$emit('reloadSpoiler', selectedMovie)"
            >
              <el-icon class="el-icon--left" style="color: #1e293b"
                ><RefreshRight
              /></el-icon>
              {{ $t('spoiler_more_options') }}
            </ElButton>

            <ElButton
              type="success"
              style="color: #1e293b"
              @click="hearSpoiler"
            >
              <ElIcon class="el-icon--left" style="color: #1e293b"
                ><VideoPlay
              /></ElIcon>
              {{ $t('spoiler_hear_button') }}
            </ElButton>

            <ElButton type="primary" style="color: #cbd5e1" @click="close">
              <ElIcon class="el-icon--left" style="color: #cbd5e1"
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
import type { PropType } from 'vue'
import { ElMessage } from 'element-plus'
import {
  CircleCloseFilled,
  VideoPlay,
  RefreshRight
} from '@element-plus/icons-vue'

import { ItemResponseWhatsMovie } from '@/interfaces/ResponseWhatsMovie'
import { SpeechService } from '@/services'

const props = defineProps({
  spoiler: {
    type: String,
    default: ''
  },
  showSpoiler: {
    type: Boolean,
    default: false
  },
  selectedMovie: {
    type: Object as PropType<ItemResponseWhatsMovie>,
    default: {
      id: 0,
      title: '',
      description: '',
      poster: '',
      poster2: ''
    } as ItemResponseWhatsMovie
  }
})

const emit = defineEmits(['update:showSpoiler', 'reloadSpoiler'])

// Show or not dialog
const dialogVisible = ref(false)

watch(
  () => props.showSpoiler,
  (isVisible) => {
    dialogVisible.value = isVisible
  }
)

// Methods
const hearSpoiler = async () => {
  try {
    await SpeechService.talk(props.spoiler) //, this.locale
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
  emit('update:showSpoiler', !dialogVisible.value)
}
</script>

<style lang="css">
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

@media (max-width: 768px) {
  .dialog-spoiler {
    @apply w-[80%];
  }
}
</style>
