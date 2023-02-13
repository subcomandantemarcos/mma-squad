import { Logo } from '@libs/shared/ui/ui-kit/logo';
import classNames from 'classnames';
import { ReactElement } from 'react';
import styles from './component.module.scss';

const classesContext = classNames.bind(styles);

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={classesContext('container', styles['header-container'])}>
        <div className={styles['header-logo']}>
          <Logo />
        </div>
      </div>
    </header>
  );
}
