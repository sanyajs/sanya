export default () => {
  return {
    plugins: [
      // registerMethods
      require.resolve('@umijs/preset-umi/dist/registerMethods'),

      // features
      require.resolve('@umijs/preset-umi/dist/features/404/404'),
      require.resolve('./features/appData/appData'),
      require.resolve('@umijs/preset-umi/dist/features/check/check'),
      require.resolve('@umijs/preset-umi/dist/features/check/babel722'),
      require.resolve('./features/codeSplitting/codeSplitting'),
      require.resolve('./features/configPlugins/configPlugins'),
      require.resolve('@umijs/preset-umi/dist/features/crossorigin/crossorigin'),
      require.resolve('@umijs/preset-umi/dist/features/depsOnDemand/depsOnDemand'),
      require.resolve('@umijs/preset-umi/dist/features/exportStatic/exportStatic'),
      require.resolve('@umijs/preset-umi/dist/features/favicons/favicons'),
      require.resolve('@umijs/preset-umi/dist/features/mock/mock'),
      require.resolve('@umijs/preset-umi/dist/features/overrides/overrides'),
      require.resolve('@umijs/preset-umi/dist/features/phantomDependency/phantomDependency'),
      require.resolve('@umijs/preset-umi/dist/features/polyfill/polyfill'),
      require.resolve('@umijs/preset-umi/dist/features/polyfill/publicPathPolyfill'),
      require.resolve('@umijs/preset-umi/dist/features/prepare/prepare'),

      // 1. generate tmp files
      require.resolve('@umijs/preset-umi/dist/features/tmpFiles/tmpFiles'),
      // 2. `clientLoader` and `routeProps` depends on `tmpFiles` files
      require.resolve('@umijs/preset-umi/dist/features/clientLoader/clientLoader'),
      require.resolve('@umijs/preset-umi/dist/features/routeProps/routeProps'),
      // 3. `ssr` needs to be run last
      require.resolve('@umijs/preset-umi/dist/features/ssr/ssr'),

      require.resolve('@umijs/preset-umi/dist/features/tmpFiles/configTypes'),
      require.resolve('@umijs/preset-umi/dist/features/transform/transform'),
      require.resolve('@umijs/preset-umi/dist/features/vite/vite'),
      require.resolve('@umijs/preset-umi/dist/features/apiRoute/apiRoute'),
      require.resolve('@umijs/preset-umi/dist/features/monorepo/redirect'),
      require.resolve('@umijs/preset-umi/dist/features/legacy/legacy'),
      require.resolve('@umijs/preset-umi/dist/features/classPropertiesLoose/classPropertiesLoose'),
      require.resolve('@umijs/preset-umi/dist/features/webpack/webpack'),

      // commands
      require.resolve('@umijs/preset-umi/dist/commands/build'),
      require.resolve('@umijs/preset-umi/dist/commands/config/config'),
      require.resolve('@umijs/preset-umi/dist/commands/dev/dev'),
      require.resolve('@umijs/preset-umi/dist/commands/help'),
      require.resolve('@umijs/preset-umi/dist/commands/lint'),
      require.resolve('@umijs/preset-umi/dist/commands/setup'),
      require.resolve('@umijs/preset-umi/dist/commands/deadcode'),
      require.resolve('./commands/version'),
      require.resolve('@umijs/preset-umi/dist/commands/verify-commit'),
      require.resolve('@umijs/preset-umi/dist/commands/preview'),
      require.resolve('@umijs/preset-umi/dist/commands/mfsu/mfsu'),
      require.resolve('@umijs/plugin-run'),
    ].filter(Boolean),
  };
};
