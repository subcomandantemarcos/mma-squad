import classNames from 'classnames';
import React, { ReactElement, ReactHTML } from 'react';
import styles from '../typography.module.scss';

export interface TextProps {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'h1' | 'h2' | 'h3' | 's1' | 's2' | 'c1' | 'c2' | 'label';
  className?: string;
}

export function Text({ type = 'h2', variant = 's2', className, children }: TextProps): ReactElement {
  const Text = type as keyof ReactHTML;

  return <Text className={classNames(styles.text, styles[`text-${variant}`], className)}>{children}</Text>;
}
