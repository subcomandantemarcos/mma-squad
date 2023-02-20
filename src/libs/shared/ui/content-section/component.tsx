import { ContentHeading, ContentHeadingProps } from '@libs/shared/ui/content-heading';
import { ReactElement, ReactNode } from 'react';
import styles from './component.module.scss';

interface ContentSectionProps {
  headingOptions: ContentHeadingProps;
  children: ReactNode | Array<ReactNode>;
}

export function ContentSection({ headingOptions, children }: ContentSectionProps): ReactElement {
  return (
    <div className={styles.content}>
      <ContentHeading {...headingOptions} />
      {children}
    </div>
  );
}
