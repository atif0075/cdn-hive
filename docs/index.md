---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CDN Hive"
  text: "Generate Free CDN,It's Open Source"
  tagline: Your website deserves the best, even if you're on a budget. You can host your CSS, JS files for free. It's Open Source.
  image: "/public/logo.svg"
  actions:
    - theme: brand
      text: Get Started →
      link: /deploy
    - theme: alt
      text: View on GitHub
      link: https://github.com/atif0075/v3-tab
      external: true
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/atif0075.png',
    name: 'M Atif',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/atif0075' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/atif0075/' }
    ]
  },
  
]
</script>

<VPTeamMembers size="small" :members="members" />

<style>
  :root {
  --vp-home-hero-name-color: transparent;
  /* --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #bd34fe 30%,
    #41d1ff
  ); */

  --vp-home-hero-name-background: -webkit-linear-gradient( -45deg, #3fb983 30%, #039252 );

  /* --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #bd34fe 50%,
    #47caff 50%
  ); */
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #41b88380 30%, #35495e80 );

  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
