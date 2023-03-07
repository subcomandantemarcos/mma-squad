import { Text } from '@libs/shared/ui/typography';
import classNames from 'classnames';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface FightDetailsProps {
  className?: string;
}

export function FightDetails({ className }: FightDetailsProps): ReactElement {
  return (
    <div className={classNames(styles.details, className)}>
      <Text>UFC 289</Text>
      <Text>November 28, 2019</Text>
      <Text>Las Vegas, USA</Text>
    </div>
  );
}
