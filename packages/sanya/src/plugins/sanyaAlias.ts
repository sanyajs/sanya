import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyConfig((memo) => {
    memo.alias = {
      ...memo.alias,
      'sanya': '@@/exports',
    };
    return memo;
  });
};
