import { FightDetails } from '@libs/fight/ui/fight-details';
import { FightersDetails } from '@libs/fight/ui/fighter-details';
import classNames from 'classnames';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface FightsListItemProps {
  className?: string;
}

export function FightsListItem({ className }: FightsListItemProps): ReactElement {
  return (
    <div className={classNames(styles.item, className)}>
      <FightDetails className={styles['item-fight-details']} />
      <div className={styles['item-content']}>
        <FightersDetails rightAligned />
        <div className=''></div>
        <FightersDetails />
      </div>
    </div>
  );
}
