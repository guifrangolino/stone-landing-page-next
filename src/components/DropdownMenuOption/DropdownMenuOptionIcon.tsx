import { ReactNode } from "react";

type DropdownMenuOptionIconProps = {
  icon: ReactNode;
};

export function DropdownMenuOptionIcon({ icon }: DropdownMenuOptionIconProps) {
  return (
    <div className="mb-1 h-6 w-6 group-hover/option:text-primary-color">
      {icon}
    </div>
  );
}
