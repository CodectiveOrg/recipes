import type { ReactNode } from "react";

import { Link } from "react-router";

import IconComponent from "@/components/icon/icon.component.tsx";
import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <header>Header</header>
      <main>
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
        <br />
        <TypographyComponent p variant="p2" style={{ maxInlineSize: "40ch" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          atque autem consectetur dolorem eaque enim ex harum hic id illo labore
          libero magni, non obcaecati quibusdam sequi similique vitae
          voluptatem. Corporis est illum, natus porro quidem quos? Accusantium
          eos fugiat maiores nobis perferendis voluptatibus? A aperiam delectus,
          ea eum fuga harum illum, iste odit optio, sint unde vel voluptas
          voluptatibus. Accusantium consequuntur delectus et nostrum, officia
          sit unde! Ab aspernatur beatae consequuntur corporis delectus dicta
          distinctio dolore dolores eligendi enim exercitationem ipsam magni
          nesciunt nisi nobis omnis, praesentium provident quasi quo quos
          repellendus saepe tempore ullam velit voluptatibus. Dolorum,
          praesentium!
        </TypographyComponent>
      </main>
    </div>
  );
}
