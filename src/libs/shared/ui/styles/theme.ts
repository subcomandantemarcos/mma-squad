import { createTheme, PaletteMode, Theme } from '@mui/material';
import { containerOptions } from './container';
import { linkOptions } from './link';

export const getTheme = (mode: PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#white'
      }
    },
    components: {
      MuiContainer: containerOptions,
      MuiLink: linkOptions
    }
  });
};
