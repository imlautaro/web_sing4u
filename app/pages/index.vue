<script setup lang="ts">
useHead({
  title: 'Sing4U'
})

const supabase = useSupabase()
const user = useUser()

const properties = ref<null | number[]>(null)
const toast = useToast()

async function fetchProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('user_email', user.value?.email)

  if (error) {
    console.error(error.message)
    toast.add({
      color: 'error',
      title: 'Ha ocurrido un error.',
      icon: 'material-symbols:error-rounded'
    })
    return
  }

  properties.value = data.map(item => item.product_id)
}

watch(user, () => {
  if (user.value) {
    if (properties.value === null) {
      fetchProperties()
    }
  }
})

async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error(error.message)
  }
}
</script>

<template>
  <div>
    <div
      v-if="!user"
      class="h-[100svh] flex flex-col py-12 overflow-y-auto items-center px-6"
    >
      <div class="flex flex-col max-w-md mx-auto gap-2 w-full">
        <UAlert
          icon="material-symbols:warning-rounded"
          title="Sing4U.app ha sido discontinuado, pero si ya compraste el curso de distorsión (Voz Ultrapoderosa) en el pasado, puedes iniciar sesión para acceder a los videos."
          variant="soft"
          color="warning"
          class="mb-4"
        />
        <span class="text-center font-bold text-2xl mb-4">Iniciar Sesión</span>
        <LoginWithGoogle />
        <small class="mx-auto">ó</small>
        <LoginWithPassword />
        <USeparator />
        <div class="flex items-center gap-2 mt-4">
          <span>Cursos y apps disponibles</span>
        </div>
        <UButton to="https://play.google.com/store/apps/details?id=com.imlautaro.vocalgym&hl=es_AR" target="_blank" trailing-icon="material-symbols:chevron-right" block variant="outline" color="neutral" label="App VocalGYM para Android" />
        <UButton to="https://vozultrapoderosa.com/" target="_blank" trailing-icon="material-symbols:chevron-right" block variant="outline" color="neutral">
          Curso "Voz Ultrapoderosa"
        </UButton>
        <div class="flex items-center gap-2 mt-4">
          <UIcon name="material-symbols:warning-rounded" />
          <span>Apps discontinuadas</span>
        </div>
        <UButton to="https://vocalizar.sing4u.app" target="_blank" trailing-icon="material-symbols:chevron-right" block variant="outline" color="neutral" label="App Web de Vocalizar" />
        <UButton to="https://melismas.sing4u.app" target="_blank" trailing-icon="material-symbols:chevron-right" block variant="outline" color="neutral" label="App Web de Melismas" />
        <UButton to="https://vocalgym.sing4u.app" target="_blank" trailing-icon="material-symbols:chevron-right" block variant="outline" color="neutral" label="VocalGYM Web (version discontinuada)" />
      </div>
    </div>
    <div
      v-else
      class="h-[100svh] overflow-hidden flex flex-col"
    >
      <div class="p-4 items-center flex justify-between border-b border-default">
        <span class="font-bold text-2xl">Sing4U</span>
        <UButton
          color="neutral"
          variant="outline"
          icon="material-symbols:logout-rounded"
          label="Cerrar sesión"
          @click="logout"
        />
      </div>

      <div v-if="properties === null" class="grow flex items-center justify-center">
        <UIcon class="size-12" name="svg-spinners:180-ring" />
      </div>

      <div
        v-else-if="!properties.includes(3)"
        class="grow flex flex-col items-center justify-center px-6"
      >
        <p class="max-w-lg mx-auto text-md text-center">
          No tienes ningún producto asociado a esta cuenta. Si estás seguro de que compraste previamente el curso de distorsión ("Voz Ultrapoderosa") en Sing4U en el pasado, es probable que lo hayas comprado con otra cuenta (otro email).
        </p>
      </div>

      <VozUltrapoderosa v-else />
    </div>
  </div>
</template>
