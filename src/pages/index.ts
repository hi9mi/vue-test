import { routes } from "@app/shared/routes";

import { FavoritesPage } from "./favorites-page";
import { MyDealsPage } from "./my-deals-page";
import { StockPage } from "./stock-page";

export const routesMap = [
  {
    path: routes.stock.path,
    name: routes.stock.name,
    component: StockPage,
  },
  {
    path: routes.favorites.path,
    name: routes.favorites.name,
    component: FavoritesPage,
  },
  {
    path: routes.deals.path,
    name: routes.deals.name,
    component: MyDealsPage,
  },
];
