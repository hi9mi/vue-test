<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import { useStockStore } from "@app/entities/stock";
import { AddDealFromStock } from "@app/features/add-deal-from-stock";
import { ToggleFavoriteDeal } from "@app/features/toggle-favorite-deal";
import { AppCardSkeleton } from "@app/shared/ui";
import { DealCard } from "@app/widgets/deal-card";
import { DealsFilters } from "@app/widgets/deals-filters";

const route = useRoute();
const { fetchStockList, toggleFavorite } = useStockStore();
const { stockList, isLoadingStockList } = storeToRefs(useStockStore());

const handleChangeFilters = ({ search, offerType }: { search: string; offerType: string }) => {
  fetchStockList(search, offerType);
};

fetchStockList((route.query.search as string) ?? "", (route.query.offer_type as string) ?? "all");
</script>

<template>
  <DealsFilters @filters-changed="handleChangeFilters" />
  <div v-if="isLoadingStockList" class="deals-list">
    <AppCardSkeleton v-for="index of 3" :key="index" />
  </div>
  <div v-else class="deals-list">
    <template v-if="stockList?.length">
      <DealCard v-for="deal of stockList" :key="deal.id" :deal="deal">
        <template #actions>
          <AddDealFromStock :id="deal.id" />
          <ToggleFavoriteDeal
            :id="deal.id"
            :is-favorite="deal.isFavorite"
            @toggled="toggleFavorite(deal.id, deal.isFavorite)"
          />
        </template>
      </DealCard>
    </template>
    <p v-else class="empty-list">Нет сделок на складе...</p>
  </div>
</template>

<style scoped>
.deals-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.empty-list {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: var(--color-dark-blue);
}
</style>
