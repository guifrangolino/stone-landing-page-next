import { ReactNode } from "react";

type DropdownMenuMobileOptionLinkContentProps = {
  children: ReactNode;
};

export function DropdownMenuMobileOptionLinkContent({
  children,
}: DropdownMenuMobileOptionLinkContentProps) {
  return <div className="ml-3">{children}</div>;
}
