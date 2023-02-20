import { Container } from '@libs/shared/ui/container';
import { ReactElement, ReactNode } from 'react';
import styles from './component.module.scss';

interface PageContainerProps {
  children: ReactNode;
  sidebarContent?: ReactNode;
}

export function PageContainer({ children, sidebarContent }: PageContainerProps): ReactElement {
  return (
    <Container className={styles['page-container']}>
      <div className={styles['page-container-content']}>{children}</div>
      {!!sidebarContent && <div className={styles['page-container-sidebar']}>{sidebarContent}</div>}
    </Container>
  );
}
