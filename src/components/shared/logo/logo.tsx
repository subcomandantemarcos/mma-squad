import { AppLink } from '../link/link';
import styles from './logo.module.scss';

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
