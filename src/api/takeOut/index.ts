import { request } from '@/utils/request';
/**
 * @description 登录
 * @param {} data
 * @returns
 */
export function newSite(data) {
  return request(
    {
      url: 'site/new',
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
