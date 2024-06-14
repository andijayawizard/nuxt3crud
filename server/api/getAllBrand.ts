export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  // const page = ref(1)
  // const search = ref('')
  const params = `/api/api.php/records/brand?include=id,nama&page=1,10`
  try {
    const data = await $fetch(`${params}`, {
      baseURL: `${config.public.apiUrl}`,
      // params: { page: page.value, search: search.value },
      headers: {
        'x-api-key': `${config.public.apiKey}`
      }
    })
    // , { watch: [page, search] }
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
