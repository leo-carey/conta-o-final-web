<template>
  <div>
    <el-switch
      v-model="$colorMode.preference"
      active-value="light"
      inactive-value="dark"
      class="mt-2"
      inline-prompt
      size="large"
      style="
        --el-switch-on-color: #dbd6ae;
        --el-switch-off-color: #737a86;
        --el-color-white: #374151;
      "
      :active-icon="Sunny"
      :inactive-icon="Moon"
    />
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
</script>
