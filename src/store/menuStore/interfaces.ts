export interface MenuState {
  selectedItem: string[];
  selectedID: string | null;
  drawerOpen: boolean;
  error: null | unknown;
  menu: Record<string, unknown>;
}

export interface MenuStore extends MenuState {
  openDrawer: () => void;
  closeDrawer: () => void;
}
