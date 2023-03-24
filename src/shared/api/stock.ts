import { supabase } from "@app/shared/config";

type FetchStockListParams = {
  search: string;
  offerType: string;
};

export const fetchStockList = async ({ search, offerType }: FetchStockListParams) => {
  if (offerType === "all") {
    const { data: stock } = await supabase.from("stock").select("*").ilike("name", `%${search}%`);

    return stock;
  }
  const { data: stock } = await supabase
    .from("stock")
    .select("*")
    .ilike("name", `%${search}%`)
    .eq("offer_type", offerType);

  return stock;
};
