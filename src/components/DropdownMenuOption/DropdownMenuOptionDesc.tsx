type DropdownMenuOptionDescProps = {
  text: string;
};

export function DropdownMenuOptionDesc({ text }: DropdownMenuOptionDescProps) {
  return (
    <p className="mt-[2px] text-sm font-normal text-color-gray group-hover/option:text-color-dark-gray">
      {text}
    </p>
  );
}
