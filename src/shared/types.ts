export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      favorites: {
        Row: {
          deal_id: number;
        };
        Insert: {
          deal_id: number;
        };
        Update: {
          deal_id?: number;
        };
      };
      my_deals: {
        Row: {
          deal_id: number;
          id: number;
          paid: boolean;
        };
        Insert: {
          deal_id: number;
          id?: number;
          paid?: boolean;
        };
        Update: {
          deal_id?: number;
          id?: number;
          paid?: boolean;
        };
      };
      stock: {
        Row: {
          description: string;
          id: number;
          location: string;
          name: string;
          offer_type: string;
          price: number;
          quantity: number;
          seller: string;
          type: string;
        };
        Insert: {
          description?: string;
          id?: number;
          location?: string;
          name?: string;
          offer_type?: string;
          price: number;
          quantity: number;
          seller?: string;
          type?: string;
        };
        Update: {
          description?: string;
          id?: number;
          location?: string;
          name?: string;
          offer_type?: string;
          price?: number;
          quantity?: number;
          seller?: string;
          type?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Deal = Database["public"]["Tables"]["stock"]["Row"];
