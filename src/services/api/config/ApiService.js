import BaseApiService from '@/services/api/config/BaseApiService';
import DOMEventService from '@/services/DOMEventService';

export default class ApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async getAll() {
    try {
      const response = await fetch(`${this.baseUrl}/${this.resource}`);

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const { status, msg, result } = await response.json();
      return result;
    } catch (err) {
      this.handleError(err);
    }
  }

  async getById(id) {
    if (!id) throw new Error('{id} is not provided');

    try {
      const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`);

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const { status, msg, result } = await response.json();
      return result;
    } catch (err) {
      this.handleError(err);
    }
  }

  async create(data = {}) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.resource}`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const { status, msg, result } = await response.json();
      DOMEventService.dispatchApiSuccess(msg || '성공');

      return result;
    } catch (err) {
      this.handleError(err);
    }
  }

  async updateById(id, data = {}) {
    if (!id) throw new Error('{id} is not provided');

    try {
      const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const { status, msg, result } = await response.json();
      DOMEventService.dispatchApiSuccess(msg || '성공');

      return result;
    } catch (err) {
      this.handleError(err);
    }
  }

  async deleteById(id) {
    if (!id) throw new Error('{id} is not provided');

    try {
      const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const { status, msg, result } = await response.json();
      DOMEventService.dispatchApiSuccess(msg || '성공');
    } catch (err) {
      this.handleError(err);
    }
  }
}
