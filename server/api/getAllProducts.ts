export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = `/api/api.php/records/products?join=brand&include=products.id,products.nama,brand.nama&order=id,desc&page=1,10`
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
