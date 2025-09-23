<script setup lang="ts">
const credentials = reactive({
  email: '',
  password: ''
})

const supabase = useSupabase()

const errorMessage = ref('')
const loggingIn = ref(false)

async function loginWithPassword() {
  errorMessage.value = ''

  if (!credentials.email || !credentials.password) {
    errorMessage.value = 'Por favor, completa todos los campos.'
    return
  }

  loggingIn.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password
  })

  loggingIn.value = false

  if (error) {
    console.error(error.message)

    if (error.message === 'Invalid login credentials') {
      errorMessage.value = 'Correo electrónico o contraseña incorrectos.'
      return
    }

    errorMessage.value = 'Ha ocurrido un error al iniciar sesión.'
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <UAlert
      v-if="errorMessage"
      color="error"
      icon="material-symbols:error-rounded"
      variant="soft"
      :title="errorMessage"
    />
    <UFormField label="Correo electrónico">
      <UInput
        v-model="credentials.email"
        class="w-full"
        type="email"
      />
    </UFormField>
    <UFormField label="Contraseña">
      <UInput
        v-model="credentials.password"
        class="w-full"
        type="password"
      />
    </UFormField>
    <UButton
      block
      label="Iniciar sesión"
      color="primary"
      :loading="loggingIn"
      @click="loginWithPassword"
    />
  </div>
</template>
