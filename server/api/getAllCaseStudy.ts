export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = '/api/api.php/records/cases_studies?include=id,nama,acak'
  try {
    const data = await $fetch(`${params}`, {
      baseURL: `${config.public.apiUrl}`,
      lazy: true,
      server: false,
      headers: {
        'x-api-key': `${config.public.apiKey}`
      }
    })
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
