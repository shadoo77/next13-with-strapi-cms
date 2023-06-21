'use client';

import { Drawer as MuiDrawer, Toolbar, Box, Divider, useTheme, useMediaQuery } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useMenuStore } from '@/store/menuStore';
import { CONSTANTS } from '@/config/constants';
import { Search } from '@/components/atoms/Search';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

function Drawer() {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, closeDrawer] = useMenuStore(
    (state) => [state.drawerOpen, state.closeDrawer],
    shallow
  );

  if (!matchDownMd) {
    return null;
  }

  return (
    <MuiDrawer
      variant={matchUpMd ? 'persistent' : 'temporary'}
      anchor="right"
      open={drawerOpen}
      onClose={closeDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          mt: matchDownMd ? 0 : 11,
          width: '100%',
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRight: 'none'
        }
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      <Toolbar sx={{ height: CONSTANTS.APPBAR_HEIGHT }} />
      <Box p={1}>
        <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Search />
          <LanguageSwitcher />
        </Box>
        <Divider sx={{ my: 1.25 }} />
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
