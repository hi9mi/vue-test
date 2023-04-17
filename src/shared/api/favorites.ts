import { supabase } from "@app/shared/config";
import { Deal } from "@app/shared/types";

type FetchFavoriteDealsParams = {
  search: string;
  offerType: string;
};
export const fetchFavoriteDeals = async ({ search, offerType }: FetchFavoriteDealsParams) => {
  if (offerType === "all") {
    const { data: favorites } = await supabase
      .from("favorites")
      .select("*, deal: stock(*)")
      .ilike("stock.name", `%${search}%`);

    if (!favorites) return null;

    return favorites
      .filter((favorite): favorite is { deal_id: number; deal: Deal } => favorite.deal !== null)
      .map(favorite => ({ ...favorite.deal, isFavorite: true }));
  }
  const { data: favorites } = await supabase
    .from("favorites")
    .select("*, deal: stock(*)")
    .ilike("stock.name", `%${search}%`)
    .eq("stock.offer_type", offerType);

  if (!favorites) return null;

  return favorites
    .filter((favorite): favorite is { deal_id: number; deal: Deal } => favorite.deal !== null)
    .map(favorite => ({ ...favorite.deal, isFavorite: true }));
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
