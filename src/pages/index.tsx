import { NewsList } from '@libs/news/features/news-list';
import { PageContainer } from '@libs/shared/ui/page-container';
import { SidebarSection } from '@libs/shared/ui/sidebar-section';
import Head from 'next/head';
import { useMemo } from 'react';

export default function HomePage() {
  const sidebar = useMemo(
    () => <SidebarSection headingOptions={{ title: 'Best Bettors' }}>blbalblabla</SidebarSection>,
    []
  );

  return (
    <>
      <Head>
        <title>Last news and insights about MMA - MMA SQUAD</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageContainer sidebarContent={sidebar}>
          <NewsList />
        </PageContainer>
      </main>
    </>
  );
}
