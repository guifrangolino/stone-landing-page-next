type DropdownMenuMobileOptionLinkDescProps = {
  text: string;
};

export function DropdownMenuMobileOptionLinkDesc({
  text,
}: DropdownMenuMobileOptionLinkDescProps) {
  return <p className="mt-[2px] text-sm font-normal text-color-gray">{text}</p>;
}
