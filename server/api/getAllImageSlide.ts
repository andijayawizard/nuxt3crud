export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = `/api/api.php/records/imgslide?include=id,nama,acak`
  try {
    const data = await $fetch(`${params}`, {
      baseURL: `${config.public.apiUrlLocal}`,
      lazy: true,
      server: false,
      headers: {
        'x-api-key': `${config.public.apiKeyLocal}`
      }
    })
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
