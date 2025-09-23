<script setup lang="ts">
defineProps<{
    item: any
}>()
</script>

<template>
    <UCollapsible class="flex flex-col gap-4">
        <template #default="{ open }">
            <UButton icon="material-symbols:play-circle-rounded" color="neutral" variant="outline" block :label="item.title" size="xl">
                <template #trailing>
                    <UIcon class="ml-auto size-6 duration-150" :class="[open && 'rotate-180']" name="material-symbols:expand-more" />
                </template>
            </UButton>
        </template>
        <template #content>
            <BunnyVideo :video-id="item.src.split('/').pop()" />
        </template>
    </UCollapsible>
</template>