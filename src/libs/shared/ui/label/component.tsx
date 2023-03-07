import { Text } from '@libs/shared/ui/typography/text';
import classNames from 'classnames';
import { ReactElement } from 'react';
import styles from './component.module.scss';

interface LabelProps {
  value: number;
  size?: 'large' | 'big' | 'medium' | 'small';
  appearance?: 'blue' | 'green';
}

export function Label({ value, size = 'big', appearance = 'blue' }: LabelProps): ReactElement {
  return (
    <div className={classNames(styles.label, styles[`label-${appearance}`])}>
      <Text type='span' variant='label'>
        {value}
      </Text>
    </div>
  );
}
