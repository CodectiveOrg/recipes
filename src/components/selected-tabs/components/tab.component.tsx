import type { ReactNode } from "react";

import TypographyComponent from "@/components/typography/typography.component";

type Props = {
  label: string;
  color: "text" | "text-secondary";
  selected: string;
  onClick: () => void;
};
export default function TabComponent({
  label,
  selected,
  color,
  onClick,
}: Props): ReactNode {
  return (
    <span className={selected} key={label} onClick={onClick}>
      <TypographyComponent span variant="p2" color={color}>
        {label}
      </TypographyComponent>
    </span>
  );
}
