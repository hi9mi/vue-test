import { defineStore } from "pinia";

import * as api from "@app/shared/api";
import type { Deal } from "@app/shared/types";

type StockStore = {
  stockList: (Deal & { isFavorite: boolean })[] | null;
  isLoadingStockList: boolean;
};

export const useStockStore = defineStore("stock", {
  state: (): StockStore => ({
    stockList: [],
    isLoadingStockList: false,
  }),
  actions: {
    async fetchStockList(search = "", offerType = "all") {
      this.$state.isLoadingStockList = true;
      const [stockList, favoriteList] = await Promise.all([
        api.fetchStockList({ search, offerType }),
        api.fetchFavoriteList(),
      ]);

      if (stockList) {
        this.$state.stockList = stockList.map(deal =>
          favoriteList?.some(favoriteDeal => favoriteDeal.deal_id === deal.id)
            ? { ...deal, isFavorite: true }
            : { ...deal, isFavorite: false }
        );
      }

      this.$state.isLoadingStockList = false;
    },
    toggleFavorite(id: number, isFavorite: boolean) {
      if (isFavorite) {
        this.$state.stockList?.forEach(deal => {
          if (deal.id === id) {
            deal.isFavorite = !isFavorite;
          }
        });
      } else {
        this.$state.stockList?.forEach(deal => {
          if (deal.id === id) {
            deal.isFavorite = !isFavorite;
          }
        });
      }
    },
  },
});
