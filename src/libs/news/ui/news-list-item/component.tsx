import { Text } from '@libs/shared/ui/typography/text';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import styles from './component.module.scss';

interface NewsListItemProps {
  className?: string;
}

export function NewsListItem({ className }: NewsListItemProps): ReactElement {
  const [image, setImage] = useState<string>('');

  const images = [
    'https://cdn.vox-cdn.com/thumbor/VdVIKxl_X9lcje5tZeLNT4NroCY=/0x0:4000x2667/920x613/filters:focal(1470x579:2110x1219):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72042453/682434552.0.jpg',
    'https://cdn.vox-cdn.com/thumbor/APfN8w8ptfSRm070NHH7SvbzK9U=/0x0:5225x3483/920x613/filters:focal(2164x673:3000x1509):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72041437/1437600606.0.jpg',
    'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/bo-nickal-jamie-pickett-ufc-285-3.jpg?resize=1024,683',
    'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/jon-jones-ciryl-gane-ufc-285-12.jpg?w=1000&h=600&crop=1',
    'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/jon-jones-ciryl-gane-ufc-285-13.jpg?w=1000&h=600&crop=1',
    'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/jon-jones-ufc-285-walkout.jpg?resize=1024,683',
    'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/03/ciryl-gane-ufc-285.jpg?resize=1024,683'
  ];

  useEffect(() => {
    setImage(images[Math.floor(Math.random() * 7)]);
  }, []);

  return (
    <Link href='/news/blabla' className={classNames(styles.item, styles['item-container'], className)}>
      <div className={styles['item-image']}>
        <img
          src={
            image ||
            'https://cdn.vox-cdn.com/thumbor/jLLqdxuFGhTSpE3prsXQhUbQy5Y=/0x0:4672x3153/750x500/filters:focal(2077x323:2823x1069):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71992163/1467471957.0.jpg'
          }
          alt=''
        />
      </div>
      <div className={styles['item-content']}>
        <div className={styles['item-tags']}></div>
        <Text type='span' variant='label'>
          November 16, 2022
        </Text>
        <Text className={styles['item-title']} type='h3' variant='s2'>
          MMA veteran Phil Baroni arrested in Mexico for alleged killing of girlfriend
        </Text>
        <Text type='p' variant='c1'>
          Jon Jones sent a warning to Stipe Miocic ahead of a their potential UFC heavyweight championship matchup.
        </Text>
      </div>
    </Link>
  );
}
