import { ReactNode } from 'react';
// import dynamic from 'next/dynamic';
import { Container } from '@mui/material';
// import { Breadcrumb } from '@/components/atoms/Breadcrumb';

// const AppBar = dynamic(() =>
//   import('@/components/base/AppBar').then((component) => component.AppBar)
// );

interface IProps {
  children: ReactNode;
  withBreadcrumb?: boolean;
  withTopbar?: boolean;
}

// In order to keep all pages/layout with same padding, max-width, etc
// And to have control over showing other tools, e.g: TopBar, breadcrumb , etc...
function Layout({ children, withBreadcrumb = true, withTopbar = true }: IProps) {
  return (
    // We could also determine max width e.g: in rem, and then style the container
    <Container maxWidth="xl">
      {/* {withTopbar && <AppBar />}
      {withBreadcrumb && <Breadcrumb />} */}
      {children}
    </Container>
  );
}

export default Layout;
