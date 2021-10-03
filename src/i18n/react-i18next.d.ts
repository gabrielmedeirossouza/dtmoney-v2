import 'react-i18next';

import { ptBr } from './locales/pt-br';
import { enUs } from './locales/en-us';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      ptBr: typeof ptBr.path
      enUs: typeof enUs.path
    }
  }
}
