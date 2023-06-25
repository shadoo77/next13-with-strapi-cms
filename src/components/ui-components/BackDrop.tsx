import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';

function Backdrop({ open }: { open: boolean }) {
  return (
    <MuiBackdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
}

export default Backdrop;
