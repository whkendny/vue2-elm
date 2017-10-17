/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'history';
let imgBaseUrl = 'http://images.cangdu.org/';


if (process.env.NODE_ENV === 'development') {
  // 设置开发环境配置

} else if (process.env.NODE_ENV === 'production') {
  // 设置发布(生产)环境的配置
  // baseUrl = 'http://cangdu.org:8001';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
};
