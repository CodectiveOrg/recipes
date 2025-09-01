import type { ComponentProps } from "react";

import IconComponent from "../icon/icon.component";
import TypographyComponent from "../typography/typography.component";

import styles from "./greetings-section.module.css";

type Props = ComponentProps<"div"> & {
  userName: string;
};

type GreetingMessageProps = {
  icon: string;
  message: string;
};

export default function GreetingsSectionComponent({ userName }: Props) {
  const calculateGreetingsMessage = (): GreetingMessageProps => {
    const time = new Date().getHours();
    if (time >= 5 && time < 11) {
      return { icon: "sun-fog-linear", message: "Good Morning" };
    }
    if (time >= 12 && time < 16) {
      return { icon: "sun-2-linear", message: "Good Afternoon" };
    }
    if (time >= 17 && time < 20) {
      return { icon: "cloud-sun-2-linear", message: "Good evening" };
    }
    if (time >= 21 || time < 5) {
      return { icon: "moon-linear", message: "Good night" };
    }

    return { icon: "", message: "" };
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
