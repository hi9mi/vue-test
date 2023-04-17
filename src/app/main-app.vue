<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import DealsIcon from "@app/shared/icons/deals.svg?component";
import HeartIcon from "@app/shared/icons/heart.svg?component";
import StockIcon from "@app/shared/icons/stock.svg?component";
import { routes } from "@app/shared/routes";
import { AppHeader } from "@app/shared/ui";

const route = useRoute();

const query = computed(() => {
  for (const { name } of routes) {
    if (route.name?.toString().includes(name)) {
      return route.query;
    }
  }
  return undefined;
});

const navList = [
  {
    text: "Избранное",
    path: routes.favorites.path,
    icon: HeartIcon,
  },
  {
    text: "Склад",
    path: routes.stock.path,
    icon: StockIcon,
  },
  {
    text: "Сделки",
    path: routes.deals.path,
    icon: DealsIcon,
  },
];
</script>

<template>
  <AppHeader>
    <nav class="header-nav">
      <ul class="nav-list">
        <li v-for="({ path, text, icon }, index) of navList" :key="index" class="nav">
          <component :is="icon" class="nav-icon" />
          <router-link :to="{ path, query }" class="nav-link">{{ text }}</router-link>
        </li>
      </ul>
    </nav>
  </AppHeader>
  <router-view />
</template>

<style scoped>
.header-nav {
  display: flex;
  width: 100%;
}

.nav-list {
  list-style-type: none;
  margin-left: auto;
  display: flex;
}

.nav {
  text-align: center;
  padding: 7px;
  width: 86px;
  height: 50px;
  border-radius: 10px;
  position: relative;
}

.nav-link {
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-dark-blue);
}

.nav > .nav-link::before {
  position: absolute;
  content: "";
  inset: 0;
}
@supports selector(:has(*)) {
  .nav:has(.router-link-active) {
    background-color: var(--color-light-gray);
  }
}

@supports not selector(:has(*)) {
  .router-link-active.nav-link::after {
    position: absolute;
    content: "";
    z-index: -1;
    inset: 0;
    border-radius: 10px;
    background-color: var(--color-light-gray);
  }
}

.nav-icon {
  height: 20px;
  width: 20px;
  margin: auto;
}
</style>
