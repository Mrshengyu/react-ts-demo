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

// 提交文章表单
export function createArticleAPI(data) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'post',
        data
    })
}


// 获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: `/mp/articles`,
    method: 'GET',
    params
  });
}

//删除文章
export function deleteArticleAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE',
  });
}

//获取文章详情
export function getArticleDetailAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'GET',
  });
}

//更新文章
export function updateArticleAPI(data) {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  });
}