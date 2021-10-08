import { useTranslation } from 'react-i18next';

import { Button } from '@/components/global';
import { Container } from './styles';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguagePtbr = () => i18n.changeLanguage('pt-BR');
  const handleChangeLanguageEnus = () => i18n.changeLanguage('en-US');

  return (
    <Container>
      <Button onClick={handleChangeLanguagePtbr}>
        ptBr
      </Button>

      <Button onClick={handleChangeLanguageEnus}>
        enUs
      </Button>
    </Container>
  );
};
