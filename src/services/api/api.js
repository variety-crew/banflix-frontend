import PostApiService from '@/services/api/PostApiService';
import AuthApiService from '@/services/api/AuthApiService';
import UserApiService from '@/services/api/UserService';
import ThemeApiService from '@/services/api/ThemeApiService';
import ReviewApiService from './ReviewApiService';
import NoticeApiService from '@/services/api/NoticeApiService';
import EventApiService from '@/services/api/EventApiService';

export const $api = {
  posts: new PostApiService(),
  auth: new AuthApiService(),
  user: new UserApiService(),
  theme: new ThemeApiService(),
  review: new ReviewApiService(),
  notice: new NoticeApiService(),
  event: new EventApiService(),
};
