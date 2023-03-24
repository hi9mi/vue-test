<script lang="ts" setup>
import SearchIcon from "@app/shared/icons/search.svg?component";

const props = defineProps<{ search: string }>();
const emit = defineEmits<{ (e: "update:search", value: string): void; (e: "searchSubmitted", value: string): void }>();

const updateSearch = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emit("update:search", event.target.value);
  }
};

const submitSearch = () => {
  emit("searchSubmitted", props.search);
};
</script>

<template>
  <form class="search-filter" @submit.prevent="submitSearch">
    <input
      class="search-input"
      type="text"
      placeholder="Поиск"
      aria-label="search"
      :value="search"
      @input="updateSearch"
    />
    <button class="search-button" aria-label="search-button" type="submit"><SearchIcon class="search-icon" /></button>
  </form>
</template>

<style scoped>
.search-filter {
  background-color: var(--color-white);
  border: 1px solid var(--color-dark-gray);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 4px 4px 20px;
  transition: all 0.3s;
}
.search-filter:focus-within {
  border-color: var(--color-dark-blue);
}

.search-input {
  font-size: 15px;
  font-weight: 400;
  color: var(--color-dark-blue);
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
}
.search-filter::placeholder {
  color: var(--color-manatee);
}
.search-button {
  width: fit-content;
  padding: 10px;
  background-color: var(--color-dark-blue);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
