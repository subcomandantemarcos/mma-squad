import { AppLink } from '../link';
import styles from './component.module.scss';

export function Logo(): JSX.Element {
  return (
    <AppLink href='/' className={styles.logo}>
      <div className={styles['logo-wrapper']}>
        <span className={styles['logo-text']}>MMA</span>
      </div>
      <span className={styles['logo-text']}>SQUAD</span>
    </AppLink>
  );
}
