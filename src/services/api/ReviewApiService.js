import ApiService from '@/services/api/config/ApiService';

export default class ReviewApiService extends ApiService {
  constructor() {
    super('v1/reviews');
  }

  getStatisticsByThemeCode(themeCode) {
    return this.get(`statistics/${themeCode}`);
  }

  getReviewsByThemeCode(themeCode) {
    return this.get(themeCode);
  }
}
