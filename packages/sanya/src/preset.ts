export default () => {
  return {
    presets: [
      require.resolve("@sanyajs/preset-sanya"),
      require.resolve("@umijs/preset-vue"),
    ],
    plugins: [
      require.resolve("./plugins/sanyaAlias"),
      require.resolve("./plugins/sanyaAppData"),
    ],
  };
};
