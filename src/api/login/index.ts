import { request, BaseResponse } from '@/utils/request';

/**
 * @description 登录
 * @param {LoginParams} data
 * @returns
 */
export function login(data: API.LoginParams) {
  return request<BaseResponse<API.LoginResult>>(
    {
      url: 'login',
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
/**
 * @description 登录
 * @param {LoginParams} data
 * @returns
 */
export function register(data: API.registerParams) {
  return request<BaseResponse<API.registerResult>>(
    {
      url: 'user/register',
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
// /**
//  * @description 获取验证码
//  */
// export function getImageCaptcha(params?: API.CaptchaParams) {
//   return request<API.CaptchaResult>({
//     url: 'captcha/img',
//     method: 'get',
//     params,
//   });
// }
