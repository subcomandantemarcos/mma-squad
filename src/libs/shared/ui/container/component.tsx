import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import styles from './component.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps): ReactElement {
  return <div className={classNames(styles.container, className)}>{children}</div>;
}
