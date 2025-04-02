<template>
    <aside class="aside">
      <H2 class="text-h2">[Pub]Guide</H2>
      <nav class="nav">
        <template v-for="(routes, type) in groupedRoutes" :key="type">
          <h3 class="text-h3">
            {{ type }}
          </h3>
          <ul v-if="routes.length" class="q-mb-10 q-my-5">
            <li v-for="r in routes" :key="r.path">
              <RouterLink :to="`/guide/${r.path}`">
                <span class="name" :class="r.meta?.deprecated && '!q-text-strike'">
                  {{ r.path }}
                </span>
                <span v-if="r.meta?.inCharge" class="text-sm text-[#666]">
                  ({{ r.meta.inCharge }})
                </span>
              </RouterLink>
            </li>
          </ul>
        </template>
      </nav>
    </aside>
  
    <main class="main">
      <h3 class="text-h3">{{ route.name.replace('Guide', '') }} 가이드</h3>
      <RouterView />
    </main>
  </template>
  
  <script setup>
  import guideRoutes from '/src/router/pubRoutes.js';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  
  const groupedRoutes = computed(() => {
    const groups = {
      component: [],
      plugin: [],
      etc: [],
    };
  
    guideRoutes[0].children.forEach((route) => {
      const type = route.meta?.type || 'etc';
  
      if (groups[type]) {
        groups[type].push(route);
      } else {
        groups['etc'].push(route);
      }
    });
    return groups;
  });
  </script>
  
  <style lang="scss" scoped>
  @import './guide.css';
  
  </style>
  