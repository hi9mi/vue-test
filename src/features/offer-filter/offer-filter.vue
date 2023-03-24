<script lang="ts" setup>
defineProps<{ selectedOfferType: string }>();
const emit = defineEmits<{ (e: "update:selectedOfferType", value: string): void }>();

const updateOfferType = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
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
  <div class="offer-filters">
    <div v-for="({ value, text }, index) of offerFiltersList" :key="index" class="offer-filter">
      <label :for="value" class="offer-label" :class="{ active: selectedOfferType === value }">{{ text }}</label>
      <input
        :id="value"
        type="radio"
        name="offer"
        :value="value"
        class="offer-input"
        :checked="selectedOfferType === value"
        @input="updateOfferType"
      />
    </div>
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

.offer-filter > * {
  cursor: pointer;
}

.offer-label {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-manatee);
  transition: color linear 0.1s;
}
.offer-label.active {
  color: var(--color-dark-blue);
}

.offer-input {
  display: none;
}
</style>
