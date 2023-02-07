import Container, { ContainerTypeMap } from '@mui/material/Container';
import { ReactElement } from 'react';

export function AppContainer({ maxWidth = 'xl', ...restProps }: ContainerTypeMap['props']): ReactElement {
  return <Container maxWidth={maxWidth} {...restProps} />;
}
