import { EnvVariable } from './EnvVariable';

export const Helper = {
  getServerResourceUrl: resourcePath => {
    return `${EnvVariable.Server}${resourcePath}`;
  },
};
