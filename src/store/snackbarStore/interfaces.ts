import { AlertProps, SnackbarOrigin } from '@mui/material';

export interface SnackbarProps {
  action: boolean;
  open: boolean;
  message: string;
  anchorOrigin: SnackbarOrigin;
  variant: string;
  alert: AlertProps;
  transition: string;
  close: boolean;
  actionButton: boolean;
}

export type OpenSnackbar = Omit<Partial<SnackbarProps>, 'action' | 'open'>;

export interface SnackbarStore extends SnackbarProps {
  openSnackbar: ({
    message,
    anchorOrigin,
    variant,
    alert,
    transition,
    actionButton,
    close
  }: OpenSnackbar) => void;
  closeSnackbar: () => void;
}
