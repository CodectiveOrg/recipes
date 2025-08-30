import type { ExtendedIconifyIcon } from "@iconify/types";
import { getIconData } from "@iconify/utils";

import { icons as solarIcons } from "@iconify-json/solar";

export function useIconHook(
  collection: "solar",
  name: string,
): ExtendedIconifyIcon | null {
  switch (collection) {
    case "solar":
      return getIconData(solarIcons, name);
    default:
      return null;
  }
}
