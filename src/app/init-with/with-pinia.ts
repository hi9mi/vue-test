import { createPinia } from "pinia";
import { PiniaLogger } from "pinia-logger";
import { App } from "vue";

import { getParsedEnv } from "@app/shared/env";

export const withPinia = (app: App) => {
  const pinia = createPinia();
  const { PROD } = getParsedEnv();

  pinia.use(
    PiniaLogger({
      expanded: true,
      disabled: PROD,
    })
  );
  app.use(pinia);
};
