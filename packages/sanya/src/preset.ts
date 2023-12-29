export default () => {
  return {
    presets: [require.resolve("@umijs/preset-vue")],
    plugins: [
      require.resolve("./plugins/sanyaAlias"),
      require.resolve("./plugins/sanyaAppData"),
      require.resolve("./plugins/sanyaChecker"),
    ],
  };
};
