import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { ReactElement, useState } from 'react';
import { AppContainer } from '../container';
import { Logo } from '../logo';

export function Header(): ReactElement {
  const pages = ['fighters', 'events', 'blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <AppContainer>
        <Toolbar disableGutters>
          <Logo />
          <Box>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} href={page}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
