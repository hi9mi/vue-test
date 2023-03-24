import { createApp } from "@app/app";
import { getParsedEnv } from "@app/shared/env";

const main = () => {
  const { BASE_URL } = getParsedEnv();

  const app = createApp({
    baseUrl: BASE_URL,
  });

  app.isReady.then(() => {
    app.mount("#app");
  });
  // eslint-disable-next-line no-console
  app.isReady.catch(error => console.error(error));
};

main();
