import { Label } from '@libs/shared/ui/label';
import { Text } from '@libs/shared/ui/typography';
import classNames from 'classnames';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface FightersDetailsProps {
  rightAligned?: boolean;
}

export function FightersDetails({ rightAligned = false }: FightersDetailsProps): ReactElement {
  return (
    <div className={styles.details}>
      {!rightAligned && (
        <div className={classNames(styles['details-meta'], styles['details-meta-right'])}>
          <Label value={200} />
          <Text>Jon Jones</Text>
        </div>
      )}
      <div className={styles['details-image']}>
        <img src='https://dmxg5wxfqgb4u.cloudfront.net/styles/event_results_athlete_headshot/s3/2023-03/JONES_JON_03-05.png' />
      </div>
      {rightAligned && (
        <div className={styles['details-meta']}>
          <Label value={200} appearance='green' />
          <Text>Jon Jones</Text>
        </div>
      )}
    </div>
  );
}
