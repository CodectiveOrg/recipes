import {
  type ComponentProps,
  type HTMLElementType,
  type ReactNode,
} from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import NavbarItemComponent from "@/components/navbar/navbar-item/navbar-item.component.tsx";

import styles from "./navbar.module.css";

type NavbarItem = {
  icon: ReactNode;
  title: string;
  href: string;
};

type Props = {
  navbarItems: NavbarItem[];
} & ComponentProps<HTMLElementType>;

export default function NavbarComponent({
  navbarItems,
  className,
}: Props): ReactNode {
  return (
    <div className={styles["navbar-wrapper"]}>
      <nav className={clsx(styles.navbar, className)}>
        <span className={styles["decorative-bottom-line"]}></span>
        <ul>
          {navbarItems.map((navItem) => (
            <NavLink
              to={navItem.href}
              className={({ isActive }) => clsx(isActive && styles.active)}
            >
              <NavbarItemComponent
                icon={navItem.icon}
                title={navItem.title}
                key={navItem.title}
              />
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}
