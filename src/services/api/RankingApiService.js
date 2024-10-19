import ApiService from './config/ApiService';

export default class RankingApiService extends ApiService {
  constructor() {
    super('v1/rankings');
  }

  getMemberRanking() {
    return this.get('members');
  }
}
