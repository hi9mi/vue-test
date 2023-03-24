import { supabase } from "@app/shared/config";
import type { Deal } from "@app/shared/types";

export const addDealFromStock = async (id: number) => {
  await supabase.from("my_deals").insert([{ deal_id: id }]);
};

type FetchDealListParams = {
  search: string;
  offerType: string;
};
export const fetchDealList = async ({ search, offerType }: FetchDealListParams) => {
  if (offerType === "all") {
    const { data: deals } = await supabase
      .from("my_deals")
      .select("*, deal: stock(*)")
      .ilike("stock.name", `%${search}%`);

    if (!deals) return null;

    return deals
      .filter(myDeal => myDeal.deal !== null)
      .map(({ deal, deal_id, paid, id }) => ({ ...deal, deal_id, paid, id })) as (Deal & {
      deal_id: number;
      paid: boolean;
    })[];
  }
  const { data: deals } = await supabase
    .from("my_deals")
    .select("*, deal: stock(*)")
    .ilike("stock.name", `%${search}%`)
    .eq("stock.offer_type", offerType);

  if (!deals) return null;

  return deals
    .filter(myDeal => myDeal.deal !== null)
    .map(({ deal, deal_id, paid, id }) => ({ ...deal, deal_id, paid, id })) as (Deal & {
    deal_id: number;
    paid: boolean;
  })[];
};

export const paidDeal = async (id: number) => {
  await supabase.from("my_deals").update({ paid: true }).eq("id", id);
};
