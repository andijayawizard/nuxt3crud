<script setup lang="ts">
const route = useRoute()
const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Menu Website',
  icon: '',
  to: '/menu-website'
}, {
  label: 'Blog',
  icon: "",
  to: '/blog'
}, {
  label: 'Services',
  icon: 'i-heroicons-command-line',
  to: '/services'
}, {
  label: 'Social Media',
  icon: '',
  to: '/social-media'
}, {
  label: 'Users',
  icon: 'i-heroicons-chart-bar',
  to: '/users'
  // to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
}, {
  label: 'Image Slides',
  icon: '',
  to: '/image-slide'
}, {
  label: 'Cases Studies',
  icon: '',
  to: '/cases-studies'
}, {
  label: 'Brands',
  icon: 'i-heroicons-light-bulb',
  to: '/brands'
}, {
  label: 'Products',
  icon: 'i-heroicons-question-mark-circle',
  to: '/products'
}]

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Learn how to contribute',
  to: '/getting-started/contributing',
  target: '_blank'
}]
</script>

<template>
  <UVerticalNavigation :links="links" />
</template>

<style scoped></style>
