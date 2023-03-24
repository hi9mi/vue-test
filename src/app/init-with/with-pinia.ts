import { createPinia } from "pinia";
import { App } from "vue";

export const withPinia = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};
