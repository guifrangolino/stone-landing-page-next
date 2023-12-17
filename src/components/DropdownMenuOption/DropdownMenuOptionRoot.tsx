import { ReactNode } from "react";

type DropdownMenuOptionRootProps = {
  children: ReactNode;
};

export function DropdownMenuOptionRoot({
  children,
}: DropdownMenuOptionRootProps) {
  return (
    <a
      href="/"
      className="group/option m-4 flex items-center rounded-lg p-2 text-color-dark-gray hover:bg-background2-color"
    >
      {children}
    </a>
  );
}
