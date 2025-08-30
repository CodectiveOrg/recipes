import type { ReactNode } from "react";

import { Link } from "react-router";

import TextInputComponent from "@/components/text-input/text-input.component";

import SeachIcon from "@/icons/search/search.icon";
import UserIcon from "@/icons/user/user.icon";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      Hello, friend!
      <br />
      <TextInputComponent
        id="1001"
        placeholder="testttt"
        startAdornment={<SeachIcon />}
        endAdornment={<UserIcon />}
      />
      <Link to="/hello">Hello!</Link>
    </div>
  );
}
