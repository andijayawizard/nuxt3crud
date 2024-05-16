export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params=`/api/api.php/records/menuweb?include=id,nama,caption,seo`
  try {
    const data=await $fetch(`${params}`, {
      baseURL:`${config.public.apiUrlBitu}`,
      headers: {
        'x-api-key':`${config.public.apiKeyBitu}`
      }
    })
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
