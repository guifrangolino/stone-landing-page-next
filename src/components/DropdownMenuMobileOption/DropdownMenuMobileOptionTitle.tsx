type DropdownMenuMobileOptionTitleProps = {
  text: string;
};

export function DropdownMenuMobileOptionTitle({
  text,
}: DropdownMenuMobileOptionTitleProps) {
  return <p className="font-semibold">{text}</p>;
}
