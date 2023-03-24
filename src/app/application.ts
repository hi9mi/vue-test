import "./styles/variables.css";
import "./styles/index.css";

import { createApp as createVueApp, defineAsyncComponent } from "vue";

import { routesMap } from "@app/pages";

import { initWith } from "./init-with";

type Params = {
  baseUrl: string;
};

export const createApp = ({ baseUrl }: Params) => {
  const app = createVueApp(defineAsyncComponent(() => import("./main-app.vue")));

  initWith.pinia(app);
  const router = initWith.router({ app, routes: routesMap, baseUrl });

  const isReady = router.isReady();
  const mount = app.mount;

  return { isReady, mount };
};
