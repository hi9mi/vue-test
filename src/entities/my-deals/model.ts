import { defineStore } from "pinia";

import * as api from "@app/shared/api";
import type { Deal } from "@app/shared/types";

type MyDealsStore = {
  myDealList: (Deal & { paid: boolean; deal_id: number; isFavorite: boolean })[] | null;
  isLoadingDealList: boolean;
};

export const useMyDealsStore = defineStore("deals", {
  state: (): MyDealsStore => ({
    myDealList: [],
    isLoadingDealList: false,
  }),
  actions: {
    async fetchDealList(search = "", offerType = "all") {
      this.$state.isLoadingDealList = true;
      const [dealList, favoriteList] = await Promise.all([
        api.fetchDealList({ search, offerType }),
        api.fetchFavoriteList(),
      ]);
      if (dealList) {
        this.$state.myDealList = dealList.map(deal =>
          favoriteList?.some(favoriteDeal => favoriteDeal.deal_id === deal.deal_id)
            ? { ...deal, isFavorite: true }
            : { ...deal, isFavorite: false }
        );
      }

      this.$state.isLoadingDealList = false;
    },
    toggleFavorite(id: number, isFavorite: boolean) {
      if (isFavorite) {
        this.$state.myDealList?.forEach(deal => {
          if (deal.deal_id === id) {
            deal.isFavorite = !isFavorite;
          }
        });
      } else {
        this.$state.myDealList?.forEach(deal => {
          if (deal.deal_id === id) {
            deal.isFavorite = !isFavorite;
          }
        });
      }
    },
    dealHasPaid(id: number) {
      this.$state.myDealList?.forEach(deal => {
        if (deal.id === id) {
          deal.paid = !deal.paid;
        }
      });
    },
  },
});
