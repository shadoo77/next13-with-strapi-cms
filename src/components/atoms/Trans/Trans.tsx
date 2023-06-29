import { Trans as I18Trans } from 'react-i18next';
import { useTranslation } from '@/contexts/translationContext';

function Trans({ ...rest }) {
  const { t } = useTranslation();

  return <I18Trans t={t} {...rest} />;
}

export default Trans;
