'use client';

import { Ref, forwardRef } from 'react';
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  Container,
  Fade,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { shallow } from 'zustand/shallow';
import SiteLogo from '../SiteLogo/SiteLogo';
import { Search } from '@/components/atoms/Search';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { CONSTANTS, ENV } from '@/config/constants';
import { useMenuStore } from '@/store/menuStore';
import { safelyParseJSON } from '@/utils';

const CloseIcon = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div {...props} ref={ref}>
      <Close />
    </div>
  );
});

const MenuIcon = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div {...props} ref={ref}>
      <Menu />
    </div>
  );
});

function AppBar() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, openDrawer, closeDrawer] = useMenuStore(
    (state) => [state.drawerOpen, state.openDrawer, state.closeDrawer],
    shallow
  );

  const inMaintenance = safelyParseJSON(ENV.MIANTENANCE_MODE);

  const appbarContent = inMaintenance ? (
    <LanguageSwitcher />
  ) : (
    <>
      {matchDownMd && drawerOpen && (
        <IconButton edge="start" color="inherit" aria-label="close-drawer" onClick={closeDrawer}>
          <Fade timeout={1000} in={drawerOpen}>
            <CloseIcon />
          </Fade>
        </IconButton>
      )}
      {matchDownMd && !drawerOpen && (
        <IconButton edge="start" color="inherit" aria-label="hamburger-menu" onClick={openDrawer}>
          <Fade timeout={1000} in={!drawerOpen}>
            <MenuIcon />
          </Fade>
        </IconButton>
      )}
      {!matchDownMd && (
        <>
          <Search />
          <LanguageSwitcher />
        </>
      )}
    </>
  );

  return (
    <Box sx={{ flexGrow: 1, height: CONSTANTS.APPBAR_HEIGHT }}>
      <MuiAppBar component="nav" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              height: CONSTANTS.APPBAR_HEIGHT,
              paddingRight: { sm: 1, md: 0 },
              paddingLeft: { sm: 1, md: 0 }
            }}
          >
            <SiteLogo />
            {appbarContent}
          </Toolbar>
        </Container>
      </MuiAppBar>
    </Box>
  );
}

export default AppBar;
