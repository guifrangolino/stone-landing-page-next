import { HTMLAttributes } from "react";

interface DropdownMenuMobileOptionDescProps
  extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export function DropdownMenuMobileOptionDesc(
  props: DropdownMenuMobileOptionDescProps,
) {
  const { text, className, ...rest } = props;

  return (
    <p className={`text-sm font-normal ${className}`} {...rest}>
      {text}
    </p>
  );
}
