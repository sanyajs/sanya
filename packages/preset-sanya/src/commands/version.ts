import type { IApi } from "umi";

export default (api: IApi) => {
  api.registerCommand({
    name: 'version',
    alias: 'v',
    description: 'show sanya version',
    configResolveMode: 'loose',
    fn({ args }) {
      const version = require('../../package.json').version;
      if (!args.quiet) {
        console.log(`sanya@${version}`);
      }
      return version;
    },
  });
};
