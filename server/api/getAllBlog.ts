export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const params = '/api/api.php/records/blog?join=user&include=blog.id,blog.nama,user.username,user.nama_pengguna&order=id,desc&page=1,10'
  // const params = 'wp-json/wp/v2/posts?categories=754&_fields[]=id&_fields[]=title&per_page=10&page=1'
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
