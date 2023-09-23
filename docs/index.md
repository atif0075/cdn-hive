---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CDN Hive"
  text: "Generate Free CDN,It's Open Source"
  tagline: Your website deserves the best, even if you're on a budget. You can host your CSS, JS files for free. It's Open Source.
  image: "https://raw.githubusercontent.com/atif0075/cdn-hive/main/public/logo.svg"
  actions:
    - theme: brand
      text: Start Deploying →
      link: /deploy
    - theme: alt
      text: View on GitHub
      link: https://github.com/atif0075/cdn-hive
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
