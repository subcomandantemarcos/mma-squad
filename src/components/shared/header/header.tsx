import classNames from 'classnames';
import { Logo } from '../logo/logo';
import { Menu } from '../menu/menu';
import styles from './header.module.scss';

const classesContext = classNames.bind(styles);

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={classesContext('container', styles['header-container'])}>
        <div className={styles['header-logo']}>
          <Logo />
        </div>
        <Menu />
      </div>
    </header>
  );
}
