type DropdownMenuMobileOptionLinkTitleProps = {
  text: string;
};

export function DropdownMenuMobileOptionLinkTitle({
  text,
}: DropdownMenuMobileOptionLinkTitleProps) {
  return <p className="font-medium">{text}</p>;
}
