import { request } from '@/utils/request';
/**
 * @description 新建站点
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
/**
 * @description 获取站点列表
 * @param {} data
 * @returns
 */
export function getSiteList(query) {
  return request(
    {
      url: '/site/list',
      method: 'get',
      params: query,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
