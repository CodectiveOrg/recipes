import {
  type ComponentProps,
  type HTMLElementType,
  type ReactNode,
} from "react";

import clsx from "clsx";

import NavbarItemComponent from "@/components/navbar/navbar-item/navbar-item.component.tsx";

import styles from "./navbar.module.css";

type NavbarItem = {
  icon: ReactNode;
  title: string;
};

type Props = {
  navbarItems: NavbarItem[];
} & ComponentProps<HTMLElementType>;

export default function NavbarComponent({
  navbarItems,
  className,
}: Props): ReactNode {
  return (
    <nav className={clsx(styles.navbar, className)}>
      {navbarItems.map((navItem) => (
        <NavbarItemComponent icon={navItem.icon} title={navItem.title} />
      ))}
    </nav>
  );
}
