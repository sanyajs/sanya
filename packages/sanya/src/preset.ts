export default () => {
  return {
    plugins: [
      require.resolve('./plugins/alias'),
      require.resolve('./plugins/checker'),
    ],
  };
};
