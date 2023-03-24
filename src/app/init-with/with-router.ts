import { App } from "vue";
import { createRouter as createRouterNative, createWebHistory, RouteRecordRaw } from "vue-router";

type Params = {
  app: App;
  routes: RouteRecordRaw[];
  baseUrl: string;
};

export const withRouter = ({ app, routes, baseUrl }: Params) => {
  const router = createRouterNative({
    history: createWebHistory(baseUrl),
    routes,
  });

  app.use(router);

  return router;
};
