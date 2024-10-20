import dayjs from 'dayjs';
import { EnvVariable } from './EnvVariable';

export const Helper = {
  getImageUrl: (imagePath = '') => {
    if (!imagePath || imagePath.startsWith('http')) return imagePath;
    return `${EnvVariable.Server}${imagePath}`;
  },

  Date: {
    formatDateTime: stringTime => {
      return dayjs(stringTime).format('YYYY-MM-DD HH:mm');
    },
  },
};
