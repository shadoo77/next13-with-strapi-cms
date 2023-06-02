import { forwardRef, ReactNode, Ref, useEffect } from 'react';

// material-ui
import { Box, BoxProps } from '@mui/material';
import { useSnackbarStore } from '@/store/snackbarStore';
import { SeoHead } from '@/components/shared/SeoHead';
import { isEmpty } from '@/utils';
import { PageDataType } from '@/types';

// ==============================|| Page - SET TITLE & META TAGS ||============================== //
interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  global: Record<string, unknown>;
  pageData: PageDataType;
  error?: unknown;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, pageData, error, ...other }: Props, ref: Ref<HTMLDivElement>) => {
    const SEO = pageData?.attributes?.SEO;

    let title = 'Strapi-NextJS';
    let description = '';

    if (SEO && !isEmpty(SEO)) {
      title = `${title} - ${SEO.title}`;
      description = SEO.description;
    }

    const openSnackbar = useSnackbarStore((state) => state.openSnackbar);

    useEffect(() => {
      if (error && error instanceof Error) {
        openSnackbar({
          message: error?.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        });
      }
    }, [error, openSnackbar]);

    return (
      <>
        <SeoHead title={title} description={description} />

        <Box ref={ref} {...other}>
          {children}
        </Box>
      </>
    );
  }
);

export default Page;
