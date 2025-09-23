<script setup lang="ts">
const { data } = useFetch<any[]>('https://api-vocalgym.imlautaro.workers.dev/data', { server: false })
const selectedVideo = ref<string>()
</script>

<template>
  <div
    v-if="data?.[3]"
    class="grow flex flex-col overflow-hidden"
  >
    <div
      v-if="selectedVideo"
      class="aspect-video bg-elevated"
    >
      Video
    </div>
    <div class="flex flex-col grow overflow-y-auto">
      <div class="max-w-xl w-full mx-auto flex flex-col gap-8 px-4 py-8">
        <template
          v-for="item in data[3].__blocks"
          :key="item.id"
        >
          <VideoItem
            v-if="item.__block_type === 'video'"
            :item="item"
          />
          <div v-else-if="item.__block_type === 'group'" class="flex flex-col gap-4">
            <h2 class="font-bold text-2xl mt-6">{{ item.title }}</h2>
            <template
              v-for="subItem in item.__blocks"
              :key="subItem.id"
            >
              <VideoItem
                v-if="subItem.type === 'video'"
                :item="subItem"
              />
              <div v-else-if="subItem.type === 'group'" class="flex flex-col gap-4">
                <h3 class="font-bold text-muted">{{ subItem.title }}</h3>
                <template
                  v-for="subSubItem in subItem.__blocks"
                  :key="subSubItem.id"
                >
                  <VideoItem
                    v-if="subSubItem.type === 'video'"
                    :item="subSubItem"
                  />
                  <div v-else>
                    {{ subSubItem.type }} - {{ subSubItem.id }}
                  </div>
                </template>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
