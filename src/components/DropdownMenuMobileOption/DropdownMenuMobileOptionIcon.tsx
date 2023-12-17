import { ReactNode } from "react";

type DropdownMenuMobileOptionIconProps = {
  icon: ReactNode;
  hoverEffect?: boolean;
};

export function DropdownMenuMobileOptionIcon({
  icon,
  hoverEffect,
}: DropdownMenuMobileOptionIconProps) {
  return (
    <div
      className={`mr-3 text-color-dark-gray ${
        hoverEffect ? "group-hover:text-primary-color" : null
      }`}
    >
      {icon}
    </div>
  );
}
