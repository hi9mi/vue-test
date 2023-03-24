import { defineStore } from "pinia";

import * as api from "@app/shared/api";
import type { Deal } from "@app/shared/types";

type FavoritesStore = {
  favoritesList: (Deal & { isFavorite: boolean })[] | null;
  isLoadingFavoritesList: boolean;
};

export const useFavoritesStore = defineStore("favorites", {
  state: (): FavoritesStore => ({
    favoritesList: [],
    isLoadingFavoritesList: false,
  }),
  actions: {
    async fetchFavoritesList(search = "", offerType = "all") {
      this.$state.isLoadingFavoritesList = true;

      this.$state.favoritesList = await api.fetchFavoriteListWithDeals({ search, offerType });

      this.$state.isLoadingFavoritesList = false;
    },
    removeFromFavorite(id: number) {
      this.$state.favoritesList = this.$state.favoritesList?.filter(favorite => favorite.id !== id) ?? null;
    },
  },
});
