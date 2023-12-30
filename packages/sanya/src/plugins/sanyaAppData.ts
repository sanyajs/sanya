import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyAppData((memo) => {
    // memo.umi.name = 'Sanya';
    // memo.umi.importSource = '@sanyajs/sanya';
    // memo.umi.cliName = 'sanya';
    return memo;
  });
};
