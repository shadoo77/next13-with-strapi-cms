'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SnackbarStore, SnackbarProps, OpenSnackbar } from './interfaces';
import { CONSTANTS } from '@/config/constants';

const initialState: SnackbarProps = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  variant: 'default',
  alert: {
    color: 'success',
    variant: 'filled'
  },
  transition: 'Fade',
  close: true,
  actionButton: false
};

export const useSnackbarStore = create<SnackbarStore>()(
  persist(
    (set) => ({
      ...initialState,
      openSnackbar: ({
        message = initialState.message,
        anchorOrigin = initialState.anchorOrigin,
        variant = initialState.variant,
        alert = initialState.alert,
        transition = initialState.transition,
        actionButton = initialState.actionButton,
        close
      }: OpenSnackbar) =>
        set((state) => ({
          open: true,
          action: !state.action,
          message,
          anchorOrigin: {
            ...initialState.anchorOrigin,
            ...anchorOrigin
          },
          variant,
          alert: {
            ...initialState.alert,
            ...alert
          },
          transition,
          actionButton,
          close: close === false ? close : initialState.close
        })),
      closeSnackbar: () => set({ open: false })
    }),
    {
      name: CONSTANTS.MY_APP_SNACKBAR_STORAGE,
      storage: createJSONStorage(() => localStorage)
    }
  )
);
