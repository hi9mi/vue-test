const parseEnvVariable = (variable: string) => {
  try {
    return JSON.parse(variable);
  } catch (err) {
    return variable.toString();
  }
};

export const getParsedEnv = () => {
  return Object.entries(import.meta.env).reduce(
    (env, [key, variable]) => ({
      ...env,
      [key]: parseEnvVariable(variable),
    }),
    {} as ImportMetaEnv
  );
};
