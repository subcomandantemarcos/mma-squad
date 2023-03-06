import { NewsListItem } from '@libs/news/ui/news-list-item';
import { ContentSection } from '@libs/shared/ui/content-section';
import times from 'lodash/times';
import { ReactElement } from 'react';
import styles from './component.module.scss';

export function NewsList(): ReactElement {
  const data = times(5);

  return (
    <ContentSection headingOptions={{ title: 'NEWS & INSIGHTS' }}>
      <div className='container'>
        <div className='row'>
          {data.map((key) => (
            <div className='col col-50'>
              <NewsListItem key={key} className={styles['news-list-item']} />
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}
