import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { pathToRegexp } from 'path-to-regexp';
import React, { ReactNode } from 'react';
import cx from 'classnames';

type NavLink = LinkProps & {
  exact?: boolean;
  activeClassName?: string;
  children: ReactNode;
};

export const NavLink = ({
  href,
  exact,
  as,
  activeClassName = 'text-green-400',
  children,
  ...props
}: NavLink) => {
  const { asPath } = useRouter();
  const pathParse = (as || href).toString();
  const isActive = pathToRegexp(pathParse, [], { sensitive: true, end: !!exact }).test(asPath);

  const child = React.Children.only(children) as JSX.Element;

  const className = cx(child.props.className || '', isActive ? activeClassName : '');

  return (
    <Link href={pathParse} {...props}>
      {React.cloneElement(child as React.ReactElement<any>, { className })}
    </Link>
  );
};
