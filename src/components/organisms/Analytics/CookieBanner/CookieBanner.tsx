'use client';

import { useEffect, forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
  useTheme
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Trans } from 'next-i18next';
import { useLocalStorage } from 'usehooks-ts';
import { isSSR } from '@/utils';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useLocalStorage<null | boolean>('cookie_consent', null);

  const theme = useTheme();

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';
    if (!isSSR && typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: newValue
      });
    }
  }, [cookieConsent]);

  return (
    <Dialog
      open={cookieConsent === null}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          position: 'absolute',
          bottom: 0
        }
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Typography variant="h4" component="p">
          Cookie consent :
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Trans
            i18nKey="cookieConsentText"
            values={{ cookies: 'cookies' }}
            components={{
              bold: (
                <Typography
                  variant="h3"
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                />
              )
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={() => setCookieConsent(false)}>
          Decline
        </Button>
        <Button variant="contained" color="primary" onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </Button>
      </DialogActions>
    </Dialog>
  );
}
