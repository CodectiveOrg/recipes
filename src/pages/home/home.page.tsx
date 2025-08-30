import type { ReactNode } from "react";

import { Link } from "react-router";

import TypographyComponent from "@/components/typography/typography.component.tsx";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
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
      <TypographyComponent p ellipsis variant="p1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        architecto doloremque dolorum explicabo, impedit incidunt, ipsa
        reprehenderit saepe tempore tenetur vel. Ab architecto culpa distinctio
        dolorum explicabo in ipsa libero neque officiis omnis perferendis quidem
        sint voluptas voluptate, voluptatibus! Ad adipisci amet architecto
        asperiores at consectetur consequuntur, dolorem fugiat illo illum in
        iste laboriosam magni modi molestias nihil nisi nostrum nulla
        perspiciatis porro quaerat sit vel vitae. Accusamus adipisci aspernatur,
        eum, facere facilis hic modi nesciunt perferendis quae saepe sunt
        voluptas! Ab animi at autem dignissimos dolor est ex fuga fugit illum,
        labore maxime omnis perferendis quaerat reiciendis repudiandae!
      </TypographyComponent>
      <br />
      <Link to="/hello">Call Hello API</Link>
    </div>
  );
}
