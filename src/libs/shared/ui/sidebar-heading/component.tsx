import { Text } from '@libs/shared/ui/typography/text';
import { ReactElement } from 'react';
import styles from './component.module.scss';

export interface SidebarHeadingProps {
  title: string;
}

export function SidebarHeading({ title }: SidebarHeadingProps): ReactElement {
  return (
    <div className={styles.heading}>
      <Text type='h3' variant='h3'>
        {title}
      </Text>
    </div>
  );
}
