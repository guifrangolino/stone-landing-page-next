import { ReactNode } from "react";

type DropdownMenuMobileOptionLinkIconProps = {
  icon: ReactNode;
};

export function DropdownMenuMobileOptionLinkIcon({
  icon,
}: DropdownMenuMobileOptionLinkIconProps) {
  return <div className="group-hover:text-primary-color">{icon}</div>;
}
