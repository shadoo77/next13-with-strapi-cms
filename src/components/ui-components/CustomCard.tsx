// material-ui
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const CustomStyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey[100]};
  height: 100%;
  display: flex;
  flex-direction: column;
`;
