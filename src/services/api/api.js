import PostApiService from '@/services/api/PostApiService';

export const $api = {
  posts: new PostApiService(),
};
