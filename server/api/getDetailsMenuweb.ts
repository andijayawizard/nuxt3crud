export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const id = getQuery(event)
  const params = `/api/api.php/records/menuweb/${id}?include=id,nama,caption,seo,title,keyword,description`
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
