import { MenuList } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useMemo } from 'react';

export function AppMenu(): JSX.Element {
  const links = useMemo(() => [], []);

  return (
    <Box>
      <MenuList sx={{ display: 'flex', alignItems: 'center' }}>
        <MenuItem>
          <Link href={'/events'} title='ssss'>
            FIGHTERS
          </Link>
        </MenuItem>
        <MenuItem>Sss</MenuItem>
        <MenuItem>Sss</MenuItem>
        <MenuItem>Sss</MenuItem>
      </MenuList>
    </Box>
  );
}
