import { NewsList } from '@libs/news/features/news-list';
import { ReactElement } from 'react';

export function HomePage(): ReactElement {
  return (
    <div>
      <NewsList />
    </div>
  );
}
