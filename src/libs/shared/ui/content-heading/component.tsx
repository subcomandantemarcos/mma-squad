import { Text } from '@libs/shared/ui/typography';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import styles from './component.module.scss';

export interface ContentHeadingProps {
  title: string;
  accessoryRight?: ReactNode;
  className?: string;
}

export function ContentHeading({ title, accessoryRight, className }: ContentHeadingProps): ReactElement {
  return (
    <div className={classNames(styles.heading, className)}>
      <Text type='h3' variant='h3'>
        {title}
      </Text>
      {accessoryRight}
    </div>
  );
}
