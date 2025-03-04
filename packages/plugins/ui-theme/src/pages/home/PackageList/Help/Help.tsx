import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import CopyToClipBoard from 'verdaccio-ui/components/CopyToClipBoard';
import { default as Typography } from 'verdaccio-ui/components/Heading';
import Text from 'verdaccio-ui/components/Text';
import { useConfig } from 'verdaccio-ui/providers/config';

import { CardStyled as Card, HelpTitle } from './styles';

function renderHeadingClipboardSegments(title: string, text: string): React.ReactNode {
  return (
    <Fragment>
      <Text variant={'body1'}>{title}</Text>
      <CopyToClipBoard text={text} />
    </Fragment>
  );
}

const Help: React.FC = () => {
  const { configOptions } = useConfig();
  const registryUrl = configOptions.base;
  const { t } = useTranslation();

  return (
    <Card data-testid="help-card" id="help-card">
      <CardContent>
        <Typography gutterBottom={true} id="help-card__title" variant="h5">
          {t('help.title')}
        </Typography>
        <HelpTitle color="textSecondary" gutterBottom={true}>
          {t('help.sub-title')}
        </HelpTitle>
        {renderHeadingClipboardSegments(
          t('help.first-step'),
          t('help.first-step-command-line', { registryUrl })
        )}
        {renderHeadingClipboardSegments(
          t('help.second-step'),
          t('help.second-step-command-line', { registryUrl })
        )}
        <Text variant="body2">{t('help.third-step')}</Text>
      </CardContent>
      <CardActions>
        <Button color="primary" href="https://verdaccio.org/docs/cli-registry" size="small">
          {t('button.learn-more')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Help;
