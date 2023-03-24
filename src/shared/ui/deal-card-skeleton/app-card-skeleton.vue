<script lang="ts" setup>
import { AppCard } from "@app/shared/ui";
</script>

<template>
  <AppCard>
    <template #img>
      <div class="skeleton-img"></div>
    </template>
    <template #body>
      <div class="skeleton-text" style="width: 60px"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-text" style="height: 27px; width: 120px"></div>
      <div class="skeleton-text" style="width: 120px"></div>
      <div class="skeleton-text" style="height: 55px; width: 80px"></div>
      <div class="skeleton-text" style="height: 73px; width: 100%"></div>
    </template>
    <template #details>
      <div class="skeleton-text" style="height: 20px; width: 100px"></div>
      <div class="skeleton-details-list">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </template>
    <template #actions>
      <div class="skeleton-action"></div>
      <div class="skeleton-action"></div>
    </template>
  </AppCard>
</template>

<style scoped>
.skeleton-img {
  width: 256px;
  height: 256px;
  border-radius: 10px;

  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  height: 13px;

  margin-bottom: 12px;
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-title {
  height: 15px;
  width: 100px;

  margin-bottom: 12px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-details-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;
}
.skeleton-details-list > div {
  height: 13px;
  width: 60px;

  border-radius: 5px;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-details-list > div:nth-child(odd) {
  width: 50%;
}
.definition-list > div:nth-child(even) {
  width: 50%;
}

.skeleton-action {
  align-self: flex-end;
  height: 52px;
  width: 100px;
  border-radius: 10px;

  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--color-light-gray);
  }
  100% {
    background-color: var(--color-dark-gray);
  }
}
</style>
