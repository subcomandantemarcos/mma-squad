import { Text } from '@libs/shared/ui/ui-kit/typography/text';
import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './component.module.scss';

export function Logo(): ReactElement {
  return (
    <Link href='/' className={styles.logo}>
      <div className={styles['logo-wrapper']}>
        <Text type='span' variant='h1' className={styles['logo-text']}>
          MMA
        </Text>
      </div>
      <Text type='span' variant='h1' className={styles['logo-text']}>
        SQUAD
      </Text>
    </Link>
  );
}
