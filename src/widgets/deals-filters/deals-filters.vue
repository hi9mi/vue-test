<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { OfferFilter } from "@app/features/offer-filter";
import { SearchDeal } from "@app/features/search-deal";
import { debounce } from "@app/shared/libs";

const emit = defineEmits<{ (e: "filtersChanged", value: { search: string; offerType: string }): void }>();
const router = useRouter();
const route = useRoute();
const currentSearch = ref((route.query.search as string) ?? "");
const selectedOfferType = ref((route.query.offer_type as string) ?? "all");

const handleChangeSelectedOfferType = (offerType: string) => {
  selectedOfferType.value = offerType;
  router.replace({ path: route.path, query: { ...route.query, offer_type: offerType } });
  emit("filtersChanged", { search: currentSearch.value, offerType });
};

const [debouncedChangeSearch] = debounce((search: string) => {
  emit("filtersChanged", { search, offerType: selectedOfferType.value });
}, 300);

const handleChangeSearch = (search: string) => {
  currentSearch.value = search;
  router.replace({ path: route.path, query: { ...route.query, search } });
  debouncedChangeSearch(search);
};

const handleSubmitSearch = (search: string) => {
  currentSearch.value = search;
  router.replace({ path: route.path, query: { ...route.query, search } });
  emit("filtersChanged", { search, offerType: selectedOfferType.value });
};
</script>

<template>
  <div class="filters">
    <OfferFilter :selected-offer-type="selectedOfferType" @update:selected-offer-type="handleChangeSelectedOfferType" />
    <SearchDeal :search="currentSearch" @update:search="handleChangeSearch" @search-submitted="handleSubmitSearch" />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
</style>
