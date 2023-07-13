<template>
  <section class="home-page">
    <div class="w-[1024px] mx-auto mt-24">
      <p class="mb-3 text-lg">
        Qual o nome do filme que você quer saber o final?
      </p>

      <el-input
        v-model="searchText"
        placeholder="Ex: capitão américa soldado invernal"
        style="
          --el-input-focus-border-color: #cc6c4a;
          --el-input-border-radius: 6px;
        "
      />
    </div>
  </section>
</template>

<script lang="ts">
export default {
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
