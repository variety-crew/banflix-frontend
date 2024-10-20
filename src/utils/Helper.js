import dayjs from 'dayjs';
import { EnvVariable } from './EnvVariable';

export const Helper = {
  getServerResourceUrl: resourcePath => {
    return `${EnvVariable.Server}${resourcePath}`;
  },

  Date: {
    formatDateTime: stringTime => {
      return dayjs(stringTime).format('YYYY-MM-DD HH:mm');
    },
  },
};
