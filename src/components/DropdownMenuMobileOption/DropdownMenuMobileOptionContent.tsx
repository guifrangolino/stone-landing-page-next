import { ReactNode, HTMLAttributes } from "react";

interface DropdownMenuMobileOptionContentProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function DropdownMenuMobileOptionContent(
  props: DropdownMenuMobileOptionContentProps,
) {
  const { children, className, ...rest } = props;

  return (
    <div className={`text-start text-color-dark-gray ${className}`} {...rest}>
      {children}
    </div>
  );
}
