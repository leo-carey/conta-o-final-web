<template>
  <section class="home-page">
    <div class="w-[1024px] mx-auto mt-24">
      <p class="mb-3 ml-2 font-normal">
        Qual o nome do filme que você quer saber o final?
      </p>

      <div class="flex items-center justify-between">
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
          class="ml-4 !bg-[#7ac7b1] hover:!bg-[#83d3bc] !border-[#7ac7b1] dark:!bg-[#cc6c4a] dark:hover:!bg-[#db744f] dark:!border-[#db744f]"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Search } from '@element-plus/icons-vue'

export default {
  setup() {
    return {
      Search
    }
  },
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="css">
.home-page {
}
</style>
