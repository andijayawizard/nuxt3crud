export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  try {
    const data = await $fetch(`wp-json/wp/v2/posts?categories=754&_fields[]=id&_fields[]=title&per_page=10&page=1`, {
      baseURL: `${config.public.apiUrlWP}`,
      lazy: true,
      server: false
    })
    return data
  } catch (error) {
    console.log('error: ', error);
  }
})
