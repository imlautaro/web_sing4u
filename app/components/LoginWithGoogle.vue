<script setup lang="ts">
const toast = useToast()
const supabase = useSupabase()
const loggingInWithGoogle = ref(false)

async function loginWithGoogle() {
  loggingInWithGoogle.value = true

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  loggingInWithGoogle.value = false

  if (error) {
    console.error(error.message)
    toast.add({
      color: 'error',
      title: 'Ha ocurrido un error al iniciar sesión con Google.',
      icon: 'material-symbols:error-rounded'
    })
  }
}
</script>

<template>
  <UButton
    block
    color="neutral"
    variant="outline"
    label="Continuar con Google"
    icon="logos:google-icon"
    :loading="loggingInWithGoogle"
    @click="loginWithGoogle"
  />
</template>
