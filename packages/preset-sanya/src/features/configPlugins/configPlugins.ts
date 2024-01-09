import { getSchemas as getViteSchemas } from "@umijs/bundler-vite/dist/schema";
import { getSchemas as getWebpackSchemas } from "@umijs/bundler-webpack/dist/schema";
import type { IApi } from "umi";
import { getSchemas as getExtraSchemas } from "./schema";

export default (api: IApi) => {
  const configDefaults: Record<string, any> = {
    alias: {
      umi: "@@/exports",
    },
    externals: {},
    autoCSSModules: true,
    publicPath: "/",
    mountElementId: "root",
    base: "/",
    history: { type: "browser" },
    svgr: {},
    ignoreMomentLocale: true,
    mfsu: { strategy: "eager" },
    routeLoader: { moduleType: "esm" },
  };

  const bundleSchemas = api.config.vite
    ? getViteSchemas()
    : getWebpackSchemas();
  const extraSchemas = getExtraSchemas();
  const schemas = {
    ...bundleSchemas,
    ...extraSchemas,
  };
  for (const key of Object.keys(schemas)) {
    const config: Record<string, any> = {
      schema: schemas[key] || ((Joi: any) => Joi.any()),
    };
    if (key in configDefaults) {
      config.default = configDefaults[key];
    }

    // when routes change, not need restart server
    // routes data will auto update in `onGenerateFiles` (../tmpFiles/tmpFiles.ts)
    if (["routes"].includes(key)) {
      config.onChange = api.ConfigChangeType.regenerateTmpFiles;
    }

    api.registerPlugins([
      {
        id: `virtual: config-${key}`,
        key: key,
        config,
      },
    ]);
  }

  // api.paths is ready after register
  api.modifyConfig((memo, args) => {
    memo.alias = {
      ...memo.alias,
      "@": args.paths.absSrcPath,
      "@@": args.paths.absTmpPath,
    };
    return memo;
  });
};
