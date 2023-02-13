import { HTMLAttributes, ReactElement } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps): ReactElement {
  return <button {...props} />;
}
