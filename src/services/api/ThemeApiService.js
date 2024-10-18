import ApiService from '@/services/api/config/ApiService';

export default class ThemeApiService extends ApiService {
  constructor() {
    super('v1/themes');
  }

  getGenres() {
    return this.get('genres');
  }

  searchThemes(themeName = '', genres = []) {
    const params = new URLSearchParams();
    params.set('page', '0');
    params.set('content', themeName);
    params.set('genres', genres.join(','));

    return this.get('', params.toString());
  }
}
