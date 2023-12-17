import { ReactNode } from "react";

type DropdownMenuOptionRoot2Props = {
  children: ReactNode;
};

export function DropdownMenuOptionRoot2({
  children,
}: DropdownMenuOptionRoot2Props) {
  return (
    <a
      href="/"
      className="group/option flex items-center rounded-lg p-4 text-color-dark-gray hover:bg-background3-color"
    >
      {children}
    </a>
  );
}
