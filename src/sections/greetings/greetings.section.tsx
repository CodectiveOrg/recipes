import type { ComponentProps, ReactNode } from "react";

import IconComponent from "../../components/icon/icon.component.tsx";
import TypographyComponent from "../../components/typography/typography.component.tsx";

import styles from "./greetings.module.css";

type Props = ComponentProps<"div"> & {
  userName: string;
};

type GreetingMessageProps = {
  icon: string;
  message: string;
};

export default function GreetingsSection({ userName }: Props): ReactNode {
  const calculateGreetingsMessage = (): GreetingMessageProps => {
    const hours = new Date().getHours();

    if (hours < 4) {
      return { icon: "moon-linear", message: "Good night" };
    }

    if (hours < 11) {
      return { icon: "sun-fog-linear", message: "Good Morning" };
    }

    if (hours < 16) {
      return { icon: "sun-2-linear", message: "Good Afternoon" };
    }

    if (hours < 20) {
      return { icon: "cloud-sun-2-linear", message: "Good evening" };
    }

    return { icon: "moon-linear", message: "Good night" };
  };

  const greeting = calculateGreetingsMessage();

  return (
    <div className={styles["greetings-section"]}>
      <span>
        <IconComponent name={greeting.icon} />
        <TypographyComponent variant="s">
          {greeting.message}
        </TypographyComponent>
      </span>
      <TypographyComponent variant="h3">{userName}</TypographyComponent>
    </div>
  );
}
