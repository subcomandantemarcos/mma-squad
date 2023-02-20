import { SidebarHeading, SidebarHeadingProps } from '@libs/shared/ui/sidebar-heading';
import { ReactElement, ReactNode } from 'react';
import styles from './component.module.scss';

interface SidebarSectionProps {
  children: ReactNode;
  headingOptions: SidebarHeadingProps;
}

export function SidebarSection({ headingOptions, children }: SidebarSectionProps): ReactElement {
  return (
    <div className={styles.section}>
      <SidebarHeading {...headingOptions} />
      {children}
    </div>
  );
}
