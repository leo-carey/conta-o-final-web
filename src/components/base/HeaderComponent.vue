<template>
  <header class="w-full absolute z-[999] top-0 left-0">
    <div class="w-[1024px] mx-auto">
      <div class="w-full flex items-end justify-end">
        <div class="flex justify-between items-center">
          <span></span>

          <SwitcherThemeComponent />

          <div class="mt-3 ml-6">
            <el-dropdown @command="handleDropdown">
              <span class="el-dropdown-link text-2xl dark:text-slate-300">
                <el-icon>
                  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                    data-v-12008bb2="">
                    <path fill="currentColor"
                      d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
                    </path>
                  </svg>
                </el-icon>
              </span>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="pt-BR" :disabled="true">
                    <img src="~/public/img/flag-pt-BR.png" alt="pt-BR" class="mr-2" /> Português(Brasil)
                  </el-dropdown-item>

                  <el-dropdown-item command="en" :disabled="false">
                    <img src="~/public/img/flag-en.png" alt="en" class="mr-2" /> Inglês
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  </header>
</template>

<script lang="ts">
import SwitcherThemeComponent from '@/components/base/SwitcherThemeComponent.vue'

export default {
  components: {
    SwitcherThemeComponent
  },
  methods: {
    handleDropdown(command: string) {
      console.log('Mudado o comando ===> ', command)
    }
  }
}
</script>

<style scoped></style>