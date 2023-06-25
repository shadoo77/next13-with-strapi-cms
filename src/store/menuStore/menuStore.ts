'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { MenuState, MenuStore } from './interfaces';
import { CONSTANTS } from '@/config/constants';

const initialState: MenuState = {
  selectedItem: [],
  selectedID: '',
  drawerOpen: false,
  error: null,
  menu: {}
};

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      ...initialState,
      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false })
    }),
    {
      name: CONSTANTS.MY_APP_MENU_STORAGE,
      storage: createJSONStorage(() => localStorage)
    }
  )
);
