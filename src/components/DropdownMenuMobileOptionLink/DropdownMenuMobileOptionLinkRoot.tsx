import { ReactNode } from "react";

type DropdownMenuMobileOptionLinkRootProps = {
  children: ReactNode;
};

export function DropdownMenuMobileOptionLinkRoot({
  children,
}: DropdownMenuMobileOptionLinkRootProps) {
  return (
    <a
      href="/"
      className="group m-4 flex items-center pr-2 text-sm text-color-dark-gray"
    >
      {children}
    </a>
  );
}
