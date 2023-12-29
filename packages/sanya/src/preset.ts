export default () => {
  return {
    plugins: [
      require.resolve('./plugins/sanyaAlias'),
      require.resolve('./plugins/sanyaAppData'),
      require.resolve('./plugins/sanyaChecker'),
    ],
  };
};
