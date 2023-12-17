import { ReactNode } from "react";
import { ArrowDown } from "../Icons/ArrowDown";

type DropdownMenuMobileOptionRootProps = {
  children: ReactNode;
  isDropdown?: boolean;
  show?: boolean;
  toggleShow?: (arg0: object) => void;
  href?: string;
};

export function DropdownMenuMobileOptionRoot({
  children,
  show,
  toggleShow,
  isDropdown,
  href,
}: DropdownMenuMobileOptionRootProps) {
  return (
    <>
      {isDropdown ? (
        <button
          className={`flex w-full items-center p-4 ${
            show ? "bg-background4-color" : null
          }`}
          onClick={toggleShow}
        >
          {children}
          <div className="ml-auto">
            <ArrowDown />
          </div>
        </button>
      ) : (
        <a href={href} className="group">
          <div className="flex w-full items-center p-4">{children}</div>
        </a>
      )}
    </>
  );
}
