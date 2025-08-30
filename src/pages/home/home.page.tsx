import type { ReactNode } from "react";

import { Link } from "react-router";

import IconComponent from "@/components/icon/icon.component.tsx";
import NavbarComponent from "@/components/navbar/navbar.component.tsx";
import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./home.module.css";

type NavItem = {
  icon: ReactNode;
  title: string;
  href: string;
};
const navItems: NavItem[] = [
  {
    icon: <IconComponent name="home-angle-2-bold" />,
    title: "Home",
    href: "/",
  },
  {
    icon: <IconComponent name="magnifer-linear" />,
    title: "Search",
    href: "/search",
  },
  {
    icon: <IconComponent name="add-circle-broken" />,
    title: "Add",
    href: "/add",
  },
  {
    icon: <IconComponent name="bell-bold" />,
    title: "Notification",
    href: "/notification",
  },
  {
    icon: <IconComponent name="user-bold" />,
    title: "Profile",
    href: "/profile",
  },
];

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
        <NavbarComponent navbarItems={navItems} />
        <TypographyComponent variant="h1">Heading 1</TypographyComponent>
        <TypographyComponent variant="h2">Heading 2</TypographyComponent>
        <TypographyComponent variant="h3">Heading 3</TypographyComponent>
        <TypographyComponent variant="p1">Paragraph 1</TypographyComponent>
        <TypographyComponent variant="p2">Paragraph 2</TypographyComponent>
        <TypographyComponent variant="s">Small</TypographyComponent>
        <br />
        <TypographyComponent variant="h1" color="text-secondary">
          Heading 1
        </TypographyComponent>
        <TypographyComponent variant="h2" color="text-secondary">
          Heading 2
        </TypographyComponent>
        <TypographyComponent variant="h3" color="text-secondary">
          Heading 3
        </TypographyComponent>
        <TypographyComponent variant="p1" color="text-secondary">
          Paragraph 1
        </TypographyComponent>
        <TypographyComponent variant="p2" color="text-secondary">
          Paragraph 2
        </TypographyComponent>
        <TypographyComponent variant="s" color="text-secondary">
          Small
        </TypographyComponent>
        <br />
        <TypographyComponent
          p
          ellipsis
          variant="p1"
          style={{ maxInlineSize: "40ch" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
          accusantium architecto doloremque dolorum explicabo, impedit incidunt,
          ipsa reprehenderit saepe tempore tenetur vel.
        </TypographyComponent>
        <br />
        <TypographyComponent
          p
          variant="p2"
          maxLines={3}
          style={{ maxInlineSize: "40ch" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
          accusantium architecto doloremque dolorum explicabo, impedit incidunt,
          ipsa reprehenderit saepe tempore tenetur vel.
        </TypographyComponent>
        <br />
        <div style={{ fontSize: "2rem" }}>
          <IconComponent name="home-smile-angle-bold" color="primary" />
          <IconComponent name="user-linear" color="primary" />
          <IconComponent name="settings-linear" color="primary" />
          <IconComponent name="eye-closed-linear" color="text" />
          <IconComponent
            name="lock-keyhole-minimalistic-unlocked-linear"
            color="text-secondary"
          />
          <IconComponent name="trash-bin-trash-linear" color="danger" />
        </div>
        <br />
        <Link to="/hello">Call Hello API</Link>
      </main>
    </div>
  );
}
