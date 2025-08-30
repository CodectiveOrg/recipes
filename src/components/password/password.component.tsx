import type { ReactNode } from "react";

import TextInputComponent from "@/components/text-input/text-input.component";
import IconComponent from "@/components/icon/icon.component";

export default function PasswordComponent(): ReactNode {
    return <TextInputComponent type="password" startAdornment={<IconComponent name="solar:lock-keyhole-minimalistic-bold" color="primary" />} endAdornment={<IconComponent name="solar:eye-outline" color="primary" />>} />
}
