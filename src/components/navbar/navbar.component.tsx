import {
  type ComponentProps,
  type HTMLElementType,
  type ReactNode,
} from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import IconComponent from "@/components/icon/icon.component.tsx";

import styles from "./navbar.module.css";

type Item = {
  href: string;
  title: string;
  icon: ReactNode;
};

const items: Item[] = [
  {
    href: "/",
    title: "Home",
    icon: <IconComponent name="home-angle-2-bold" />,
  },
  {
    href: "/search",
    title: "Search",
    icon: <IconComponent name="magnifer-linear" />,
  },
  {
    href: "/add",
    title: "Add",
    icon: <IconComponent name="add-circle-broken" />,
  },
  {
    href: "/notification",
    title: "Notification",
    icon: <IconComponent name="bell-bold" />,
  },
  {
    href: "/profile",
    title: "Profile",
    icon: <IconComponent name="user-bold" />,
  },
];

type Props = ComponentProps<HTMLElementType>;

export default function NavbarComponent({ className }: Props): ReactNode {
  return (
    <nav className={clsx(styles.navbar, className)}>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <NavLink
              className={({ isActive }) => clsx("s", isActive && styles.active)}
              to={item.href}
            >
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
