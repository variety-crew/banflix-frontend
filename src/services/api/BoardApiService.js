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
}
