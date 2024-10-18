import ApiService from '@/services/api/config/ApiService';

export default class ThemeApiService extends ApiService {
  constructor() {
    super('v1/themes');
  }

  //  필요 시 custom method 작성은 여기에
}
