import { ReactNode } from "react";

type DropdownMenuOptionContentProps = {
  children: ReactNode;
};

export function DropdownMenuOptionContent({
  children,
}: DropdownMenuOptionContentProps) {
  return <div className="ml-3">{children}</div>;
}
