import { supabase } from "@app/shared/config";
import { Deal } from "@app/shared/types";

type FetchFavoriteListWithDealsParams = {
  search: string;
  offerType: string;
};
export const fetchFavoriteListWithDeals = async ({ search, offerType }: FetchFavoriteListWithDealsParams) => {
  if (offerType === "all") {
    const { data: favorites } = await supabase
      .from("favorites")
      .select("*, deal: stock(*)")
      .ilike("stock.name", `%${search}%`);

    if (!favorites) return null;

    return favorites
      .filter(favorite => favorite.deal !== null)
      .map(favorite => ({ ...favorite.deal, isFavorite: true })) as (Deal & { isFavorite: boolean })[];
  }
  const { data: favorites } = await supabase
    .from("favorites")
    .select("*, deal: stock(*)")
    .ilike("stock.name", `%${search}%`)
    .eq("stock.offer_type", offerType);

  if (!favorites) return null;

  return favorites
    .filter(favorite => favorite.deal !== null)
    .map(favorite => ({ ...favorite.deal, isFavorite: true })) as (Deal & { isFavorite: boolean })[];
};

export const fetchFavoriteList = async () => {
  const { data: favorites } = await supabase.from("favorites").select("*");

  return favorites;
};

export const addToFavoriteList = async (id: number) => {
  await supabase.from("favorites").insert([{ deal_id: id }]);
};

export const deleteFromFavoriteList = async (id: number) => {
  await supabase.from("favorites").delete().eq("deal_id", id);
};
