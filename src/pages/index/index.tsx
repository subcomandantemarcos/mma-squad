import { NewsList } from '@libs/news/features/news-list';
import { ReactElement } from 'react';

export default function HomePage(): ReactElement {
  return (
    <div>
      <NewsList />
    </div>
  );
}
