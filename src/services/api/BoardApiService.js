import ApiService from '@/services/api/config/ApiService';

export default class BoardApiService extends ApiService {
  constructor() {
    super('v1/community');
  }

  getCommunityPosts() {
    return this.get('');
  }

  getCommentCount(communityPostCode) {
    return this.get(`post/${communityPostCode}/comments/count`);
  }

  getPostDetailByPostCode(communityPostCode) {
    return this.get(`post/${communityPostCode}`);
  }

  getCommentsByPostCode(communityPostCode) {
    return this.get(`post/${communityPostCode}/comments`);
  }

  submitComment(communityPostCode, commentData) {
    // const params = new URLSearchParams();
    params.append('content', commentData);
    // return this.post(`post/${communityPostCode}/comments`, commentData);
    return this.post({ content: commentData.content }, `post/${communityPostCode}/comments`);
  }
}
