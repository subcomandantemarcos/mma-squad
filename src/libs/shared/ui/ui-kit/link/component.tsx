import Link, { LinkProps } from '@mui/material/Link';
import NextLink from 'next/link';
import { ReactElement } from 'react';

export function AppLink(props: LinkProps<'a'>): ReactElement {
  return <Link component={NextLink} {...props} />;
}
