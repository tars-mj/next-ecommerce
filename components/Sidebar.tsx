import { useRouter } from 'next/router';
import { NavLink } from './NavLink';

export const Sidebar = () => {
  return (
    <nav className="bg-neutral-400 px-4 py-2 flex flex-col">
      <NavLink href="/products/123/">
        <a className="m-2">123</a>
      </NavLink>
      <NavLink href="/products/456/">
        <a className="m-2">456</a>
      </NavLink>
      <NavLink href="/products/789/">
        <a className="m-2">789</a>
      </NavLink>
    </nav>
  );
};
