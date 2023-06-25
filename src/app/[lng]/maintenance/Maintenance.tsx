'use client';

import { Container, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CustomStyledCard } from '@/components/ui-components/CustomCard';
import { useMaintenance } from '@/queries/hooks/maintenance';
import Backdrop from '@/components/ui-components/BackDrop';

export default function MaintenancePage() {
  const { data, isLoading, isFetching } = useMaintenance();

  if (isFetching || isLoading) {
    return <Backdrop open={isFetching} />;
  }

  if (!data) {
    return null;
  }

  const { title, description, image } = data;

  const { url, caption } = image;

  return (
    <Container maxWidth={'sm'}>
      <CustomStyledCard>
        <CardMedia component="img" image={url} title={caption} sx={{ height: 'auto' }} />
        <CardContent>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="subtitle1">
                <strong>{title}</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CustomStyledCard>
    </Container>
  );
}
