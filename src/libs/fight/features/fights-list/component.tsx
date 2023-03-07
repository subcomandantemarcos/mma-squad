import { FightsListItem } from '@libs/fight/ui/fights-list-item';
import { ContentSection } from '@libs/shared/ui/content-section';
import times from 'lodash/times';
import { ReactElement } from 'react';
import styles from './component.module.scss';

export function FightsList(): ReactElement {
  const data = times(5);

  return (
    <ContentSection headingOptions={{ title: 'TRY TO PREDICT' }}>
      <div className='container'>
        {data.map((key) => (
          <FightsListItem key={key} className={styles['fights-list-item']} />
        ))}
      </div>
    </ContentSection>
  );
}
