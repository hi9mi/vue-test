<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import { useMyDealsStore } from "@app/entities/my-deals";
import { PaidDeal } from "@app/features/pay-deal";
import { ToggleFavoriteDeal } from "@app/features/toggle-favorite-deal";
import { AppCardSkeleton } from "@app/shared/ui";
import { DealCard } from "@app/widgets/deal-card";
import { DealsFilters } from "@app/widgets/deals-filters";

const route = useRoute();
const { fetchDealList, toggleFavorite, dealHasPaid } = useMyDealsStore();
const { myDealList, isLoadingDealList } = storeToRefs(useMyDealsStore());

const handleChangeFilters = ({ search, offerType }: { search: string; offerType: string }) => {
  fetchDealList(search, offerType);
};

fetchDealList((route.query.search as string) ?? "", (route.query.offer_type as string) ?? "all");
</script>

<template>
  <DealsFilters @filters-changed="handleChangeFilters" />
  <div v-if="isLoadingDealList" class="deals-list">
    <AppCardSkeleton v-for="index of 3" :key="index" />
  </div>
  <div v-else class="deals-list">
    <template v-if="myDealList?.length">
      <DealCard v-for="deal of myDealList" :key="deal.id" :deal="deal">
        <template #actions>
          <PaidDeal :id="deal.id" :is-paid="deal.paid" @has-paid="dealHasPaid(deal.id)" />
          <ToggleFavoriteDeal
            :id="deal.id"
            :is-favorite="deal.isFavorite"
            @toggled="toggleFavorite(deal.deal_id, deal.isFavorite)"
          />
        </template>
      </DealCard>
    </template>
    <p v-else class="empty-list">Нет сделок...</p>
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
