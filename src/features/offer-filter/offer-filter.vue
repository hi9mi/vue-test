<script lang="ts" setup>
defineProps<{ selectedOfferType: string }>();
const emit = defineEmits<{ (e: "update:selectedOfferType", value: string): void }>();

const updateOfferType = (event: Event) => {
  if (event.target instanceof HTMLButtonElement) {
    emit("update:selectedOfferType", event.target.value);
  }
};

const offerFiltersList = [
  {
    value: "all",
    text: "Все типы",
  },
  {
    value: "direct",
    text: "Прямая продажа",
  },
  {
    value: "auction",
    text: "Аукцион",
  },
];
</script>

<template>
  <div class="offer-filters" aria-label="offer-type-filters">
    <button
      v-for="{ value, text } of offerFiltersList"
      :key="value"
      class="offer-filter"
      :class="{ active: selectedOfferType === value }"
      type="button"
      :value="value"
      :aria-pressed="selectedOfferType === value"
      @click="updateOfferType"
    >
      {{ text }}
    </button>
  </div>
</template>

<style scoped>
.offer-filters {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--color-light-gray);
  border: 1px solid var(--color-dark-gray);
  border-radius: 10px;
}

.offer-filter {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  color: var(--color-manatee);
  transition: color linear 0.1s;
}

.offer-filter.active {
  color: var(--color-dark-blue);
}
</style>
