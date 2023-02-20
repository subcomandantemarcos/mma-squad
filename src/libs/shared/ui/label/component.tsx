import { TextProps } from '@libs/shared/ui/typography/text';
import { ReactElement } from 'react';

interface LabelProps {
  size: 'large' | 'big' | 'medium' | 'small';
}

export function Label({ size = 'big' }: LabelProps): ReactElement {
  const textSize: Record<LabelProps['size'], TextProps['variant']> = {
    large: 'label',
    big: 'label',
    medium: 'label',
    small: 'label'
  };

  return <div></div>;
}
