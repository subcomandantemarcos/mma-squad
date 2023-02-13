import { TextProps } from '@libs/shared/ui/ui-kit/typography/text';
import classNames from 'classnames';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';
import textStyles from '../typography.module.scss';
import styles from './component.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  appearance?: 'white';
  variant?: TextProps['variant'];
  children: ReactNode;
}

export function AppLink({ children, appearance, variant, ...restProps }: LinkProps): ReactElement {
  return (
    <Link
      className={classNames(styles.link, styles[`link-${appearance}`], textStyles.text, textStyles[`text-${variant}`])}
      {...restProps}
    >
      {children}
    </Link>
  );
}
