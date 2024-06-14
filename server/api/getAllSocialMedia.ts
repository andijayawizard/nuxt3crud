export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = `/api/api.php/records/socmed`
  try {
    const data = await $fetch(`${params}`, {
      baseURL: `${config.public.apiUrl}`,
      headers: {
        'x-api-key': `${config.public.apiKey}`
      }
    })
    return data

  } catch (error) {
    console.log('error: ', error);
  }
})
