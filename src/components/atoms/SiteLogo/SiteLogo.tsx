'use client';
import Link from 'next/link';
import { Link as MuiLink, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SVG from '@/components/atoms/Icon';
import { CONSTANTS } from '@/config/constants';

const logoHeight = CONSTANTS.APPBAR_HEIGHT - 10;
const logoHeightMdDown = logoHeight - 20;

const StyledBox = styled(Box)`
  max-height: ${logoHeight}px;

  svg {
    fill: #fff;
  }
`;

function SiteLogo() {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down('md'));

  const width = `${matchMdDown ? '190' : '225'}`;
  const height = `${matchMdDown ? logoHeightMdDown : logoHeight}`;

  return (
    <MuiLink component={Link} href={'/'} aria-label="theme-logo">
      <StyledBox display="flex" gap={1}>
        <SVG name="Logo" height={height} width={height} />
        <SVG name="LogoText" width={width} height={height} />
      </StyledBox>
    </MuiLink>
  );
}

export default SiteLogo;
