import classNames from 'classnames';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import styles from './link.module.scss';

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
}

const classesContext = classNames.bind(styles);

export function AppLink({ className, children, isActive, ...restProps }: AppLinkProps) {
  const props = {
    className: classesContext(styles.link, isActive && styles['link-active'], className),
    ...restProps
  };

  return <Link {...props}>{children}</Link>;
}
