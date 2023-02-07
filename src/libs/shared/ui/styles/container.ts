import { Components } from '@mui/material';

export const containerOptions: Components['MuiContainer'] = {
  styleOverrides: {
    maxWidthXl: {
      '&.MuiContainer-maxWidthXl': {
        maxWidth: 1160
      }
    }
  }
};
