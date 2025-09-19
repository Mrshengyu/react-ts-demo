// 封装文章相关的接口
import request from '../utils/request';

//获取频道列表
export function getChannelsAPI() {
  return request.get('/channels');
}

// 获取文章列表
export function getArticlesAPI(params) {
  return request.get('/articles', { params });
}
