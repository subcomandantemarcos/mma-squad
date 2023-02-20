import { Container } from '@libs/shared/ui/container';
import { Logo } from '@libs/shared/ui/logo';
import { ReactElement } from 'react';
import styles from './component.module.scss';

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Container className={styles['header-container']}>
        <div className={styles['header-logo']}>
          <Logo />
        </div>
      </Container>
    </header>
  );
}
