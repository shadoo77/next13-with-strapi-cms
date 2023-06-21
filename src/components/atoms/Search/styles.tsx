import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const SearchSection = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  '& .MuiInputBase-input': {
    color: theme.palette.grey['100'],
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    '&::placeholder': {
      color: '#fff',
      [theme.breakpoints.down('md')]: {
        color: theme.palette.text.primary
      }
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '35ch'
      }
    },
    [theme.breakpoints.down('md')]: {
      color: theme.palette.grey['800']
    }
  }
}));

export const SearchWrapper = styled('div')`
  min-width: 20ch;
  flex-grow: 1;

  ${({ theme }) => theme.breakpoints.down('md')} {
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.grey[400]};
    border-radius: 8px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-grow: 0;
  }
`;
