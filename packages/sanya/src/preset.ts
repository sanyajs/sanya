export default () => {
  return {
    presets: [
      require.resolve('@umijs/preset-umi'),
      require.resolve('@umijs/preset-vue'),
    ],
    plugins: [
      require.resolve('./plugins/sanyaAlias'),
    ],
  };
};
