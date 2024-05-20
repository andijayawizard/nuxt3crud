export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = `/api/api.php/records/brand?include=id,nama`
  try {
    const data = await $fetch(`${params}`, {
      baseURL: `${config.public.apiUrlLocal}`,
      headers: {
        'x-api-key': `${config.public.apiKeyLocal}`
      }
    })
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
