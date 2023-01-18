import { useMemo } from 'react';

export function Menu(): JSX.Element {
  const links = useMemo(() => [], []);

  return (
    <nav>
      <ul></ul>
    </nav>
  );
}
