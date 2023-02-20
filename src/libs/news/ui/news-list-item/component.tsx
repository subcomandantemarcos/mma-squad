import { Text } from '@libs/shared/ui/typography/text';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface NewsListItemProps {
  className?: string;
}

export function NewsListItem({ className }: NewsListItemProps): ReactElement {
  return (
    <Link href='/' className={classNames(styles.item, className)}>
      <div className={styles['item-container']}>
        <div className={styles['item-image']}>
          <img
            src='https://cdn.vox-cdn.com/thumbor/jLLqdxuFGhTSpE3prsXQhUbQy5Y=/0x0:4672x3153/750x500/filters:focal(2077x323:2823x1069):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71992163/1467471957.0.jpg'
            alt=''
          />
        </div>
        <div className={styles['item-content']}>
          <div className={styles['item-tags']}></div>
          <Text type='h2' variant='s2'>
            MMA veteran Phil Baroni arrested in Mexico for alleged killing of girlfriend
          </Text>
          <Text type='span' variant='label'>
            November 16, 2022
          </Text>
        </div>
      </div>
    </Link>
  );
}
